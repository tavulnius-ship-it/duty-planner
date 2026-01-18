const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const stationNames = {
  CHI: 'Chichester',
  SSS: 'South Shields',
  HTH: 'Heworth',
  GHD: 'Gateshead',
  CEN: 'Central Station',
  MMT: 'Monument',
  SJM: 'St James',
  MAN: 'Manors',
  BYK: 'Byker',
  NSH: 'North Shields',
  HAY: 'Haymarket',
  JES: 'Jesmond',
  RGC: 'Regent Centre',
  APT: 'Airport',
  PLI: 'Park Lane Interchange'
};

// 💡 All your original duties arrays (unchanged)
const dutiesSunday = [...]; // Keep your full Sunday array here
const dutiesSaturday = [...]; // Keep Saturday here
const dutiesWeekday = [...]; // And Weekdays here

const selectedDuties = {};
const weekStartInput = document.getElementById('weekStart');
const weekContainer = document.getElementById('week');
const printBtn = document.getElementById('printBtn');
const exportBtn = document.getElementById('exportBtn');
const summaryContainer = document.getElementById('summary');
const summaryContent = document.getElementById('summaryContent');
const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');

function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function isValidWeekStart(dateStr) {
  const date = new Date(dateStr);
  return date.getDay() === 0;
}

function updateButtons() {
  const validCount = Object.keys(selectedDuties).length >= 4;
  const weekSelected = weekStartInput.value && isValidWeekStart(weekStartInput.value);
  printBtn.disabled = !(validCount && weekSelected);
  exportBtn.disabled = !(validCount && weekSelected);
}

function parseDutyTime(timeStr, dayOffset) {
  const weekStart = new Date(weekStartInput.value);
  const [sh, sm] = timeStr.split(' - ')[0].match(/.{1,2}/g).map(Number);
  const [eh, em] = timeStr.split(' - ')[1].match(/.{1,2}/g).map(Number);

  const start = new Date(weekStart);
  start.setDate(start.getDate() + dayOffset);
  start.setHours(sh, sm, 0);

  const end = new Date(start);
  end.setHours(eh, em, 0);
  if (end <= start) end.setDate(end.getDate() + 1);
  return [start, end];
}

function toICSDate(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// === Build UI and attach dropdown handlers
days.forEach((day, idx) => {
  const list = day === 'Sunday' ? dutiesSunday : day === 'Saturday' ? dutiesSaturday : dutiesWeekday;
  const selectId = `select-${day}`;

  const div = document.createElement('div');
  div.className = 'day';
  div.innerHTML = `
    <strong>${day}</strong><br/>
    <select id="${selectId}" data-day="${day}">
      <option value="">-- Select Duty Code --</option>
      ${list.map(d => `<option value="${d.code}">${d.code}</option>`).join('')}
    </select>
    <div class="details" id="details-${day}"></div>
  `;
  weekContainer.appendChild(div);

  new TomSelect(`#${selectId}`, {
    create: false,
    sortField: { field: 'text', direction: 'asc' },
    placeholder: "-- Select Duty Code --"
  });

  // ✅ Use data-day attribute for safe scope
  document.getElementById(selectId).addEventListener('change', (e) => {
    const selectedDay = e.target.dataset.day;
    const val = e.target.value;
    const dutyList =
      selectedDay === 'Sunday' ? dutiesSunday :
      selectedDay === 'Saturday' ? dutiesSaturday :
      dutiesWeekday;

    const duty = dutyList.find(d => d.code === val);
    const detailDiv = document.getElementById(`details-${selectedDay}`);

    if (val && duty) {
      selectedDuties[selectedDay] = val;
      detailDiv.textContent = `${stationNames[duty.station]} - ${duty.time}`;
    } else {
      delete selectedDuties[selectedDay];
      detailDiv.textContent = '';
    }

    updateButtons();
  });
});

weekStartInput.addEventListener('change', () => {
  if (!weekStartInput.value) return;
  const selected = new Date(weekStartInput.value);
  const day = selected.getDay();
  if (day !== 0) {
    const daysToAdd = 7 - day;
    selected.setDate(selected.getDate() + daysToAdd);
    weekStartInput.value = selected.toISOString().split('T')[0];
  }
  updateButtons();
});

printBtn.addEventListener('click', () => {
  summaryContent.innerHTML = '';
  const weekStart = new Date(weekStartInput.value);

  days.forEach((day, idx) => {
    const dutyList = day === 'Sunday' ? dutiesSunday : day === 'Saturday' ? dutiesSaturday : dutiesWeekday;
    const code = selectedDuties[day];
    const duty = dutyList.find(d => d.code === code);

    const dateForDay = new Date(weekStart);
    dateForDay.setDate(weekStart.getDate() + idx);
    const dateStr = `${day} ${dateForDay.getDate()}${getDaySuffix(dateForDay.getDate())}`;

    const div = document.createElement('div');
    div.className = 'summary-day';
    div.innerHTML = duty
      ? `<strong>${dateStr}:</strong> ${duty.code} = ${stationNames[duty.station]} - ${duty.time}`
      : `<strong>${dateStr}:</strong> RD`;
    summaryContent.appendChild(div);
  });

  summaryContainer.style.display = 'block';
  copyBtn.style.display = 'inline-block';
});

exportBtn.addEventListener('click', () => {
  let ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//DutyPlanner//EN\n`;
  Object.entries(selectedDuties).forEach(([day, code]) => {
    const dutyList = day === 'Sunday' ? dutiesSunday : day === 'Saturday' ? dutiesSaturday : dutiesWeekday;
    const duty = dutyList.find(d => d.code === code);
    const offset = days.indexOf(day);
    const [start, end] = parseDutyTime(duty.time, offset);

    ics += `BEGIN:VEVENT\nSUMMARY:${duty.code} = ${stationNames[duty.station]}\n`;
    ics += `DTSTART:${toICSDate(start)}\nDTEND:${toICSDate(end)}\n`;
    ics += `LOCATION:${stationNames[duty.station]}\n`;
    ics += `DESCRIPTION:${duty.code} - ${duty.time}\nEND:VEVENT\n`;
  });
  ics += 'END:VCALENDAR';

  const blob = new Blob([ics], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'weekly_duties.ics';
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  if (!confirm("Are you sure you want to clear all selections and reset the planner?")) return;

  days.forEach(day => {
    const select = document.getElementById(`select-${day}`);
    if (select && select.tomselect) {
      select.tomselect.clear();
    }

    const details = document.getElementById(`details-${day}`);
    if (details) {
      details.textContent = '';
    }
  });

  Object.keys(selectedDuties).forEach(k => delete selectedDuties[k]);
  weekStartInput.value = '';
  summaryContent.innerHTML = '';
  summaryContainer.style.display = 'none';
  copyBtn.style.display = 'none';
  copyMsg.style.display = 'none';
  updateButtons();
});
