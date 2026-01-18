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

const dutiesSunday = [
  { code: '102/1020', station: 'CHI', time: '0800 - 1700' },
  { code: '103/1030', station: 'SSS', time: '0800 - 1700' },
  { code: '105/1050', station: 'GHD', time: '0800 - 1700' },
  { code: '106/1060', station: 'CEN', time: '0800 - 1700' },
  { code: '107/1070', station: 'MMT', time: '0800 - 1700' },
  { code: '108/1080', station: 'SJM', time: '0800 - 1700' },
  { code: '109/1090', station: 'MAN', time: '0800 - 1700' },
  { code: '112A/B', station: 'HAY', time: '0800 - 1700' },
  { code: '1021/1022', station: 'CHI', time: '1500 - 0000' },
  { code: '1031/1032', station: 'SSS', time: '1500 - 0000' },
  { code: '1051/1052', station: 'GHD', time: '1500 - 0000' },
  { code: '1061/1062', station: 'CEN', time: '1500 - 0000' },
  { code: '1071/1072', station: 'MMT', time: '1500 - 0000' },
  { code: '1081/1082', station: 'SJM', time: '1500 - 0000' },
  { code: '1091/1092', station: 'MAN', time: '1500 - 0000' },
  { code: '1111/1112', station: 'NSH', time: '1500 - 0000' },
  { code: '1120/1121', station: 'HAY', time: '1500 - 0000' }
];

const dutiesSaturday = [
  { code: '202/2020', station: 'CHI', time: '0700 - 1600' },
  { code: '203/2030', station: 'SSS', time: '0700 - 1600' },
  { code: '204/2040', station: 'HTH', time: '0700 - 1600' },
  { code: '205/2050', station: 'GHD', time: '0700 - 1600' },
  { code: '206/2060/2069', station: 'CEN', time: '0700 - 1600' },
  { code: '207/2070', station: 'MMT', time: '0700 - 1600' },
  { code: '208/2080', station: 'SJM', time: '0700 - 1600' },
  { code: '209/2090', station: 'MAN', time: '0700 - 1600' },
  { code: '210A/B', station: 'BYK', time: '0700 - 1600' },
  { code: '211/2110', station: 'NSH', time: '0700 - 1600' },
  { code: '212/2120', station: 'HAY', time: '0700 - 1600' },
  { code: '213/2130', station: 'JES', time: '0700 - 1600' },
  { code: '216', station: 'PLI', time: '0900 - 1800' },
  { code: '2021/2022', station: 'CHI', time: '1500 - 0000' },
  { code: '2031/2032', station: 'SSS', time: '1500 - 0000' },
  { code: '2041/2042', station: 'HTH', time: '1500 - 0000' },
  { code: '2051/2052', station: 'GHD', time: '1500 - 0000' },
  { code: '2061/2062', station: 'CEN', time: '1500 - 0000' },
  { code: '2071/2072', station: 'MMT', time: '1500 - 0000' },
  { code: '2081/2082', station: 'SJM', time: '1500 - 0000' },
  { code: '2091/2092', station: 'MAN', time: '1500 - 0000' },
  { code: '2111/2112', station: 'NSH', time: '1500 - 0000' },
  { code: '2121/2122', station: 'HAY', time: '1500 - 0000' }
];

const dutiesWeekday = [
  { code: '02A/B', station: 'CHI', time: '0700 - 1600' },
  { code: '03A/B', station: 'SSS', time: '0700 - 1600' },
  { code: '04A/B', station: 'HTH', time: '0645 - 1545' },
  { code: '05A/B', station: 'GHD', time: '0630 - 1530' },
  { code: '06A/B/C', station: 'CEN', time: '0630 - 1530' },
  { code: '07A/B', station: 'MMT', time: '0630 - 1530' },
  { code: '08A/B', station: 'SJM', time: '0645 - 1545' },
  { code: '09A/B', station: 'MAN', time: '0645 - 1545' },
  { code: '10A/B', station: 'BYK', time: '0700 - 1600' },
  { code: '11A/B', station: 'NSH', time: '0700 - 1600' },
  { code: '12A/B', station: 'HAY', time: '0630 - 1530' },
  { code: '13A/B', station: 'JES', time: '0645 - 1545' },
  { code: '14', station: 'RGC', time: '0700 - 1600' },
  { code: '15A/B', station: 'APT', time: '0700 - 1600' },
  { code: '16', station: 'PLI', time: '0700 - 1600' },
  { code: '13-0', station: 'HAY', time: '1000 - 1900' },
  { code: '13-1', station: 'MMT', time: '1000 - 1900' },
  { code: '02-0/02-1', station: 'CHI', time: '1500 - 0000' },
  { code: '03-0/03-1', station: 'SSS', time: '1500 - 0000' },
  { code: '04X/Y', station: 'HTH', time: '1500 - 0000' },
  { code: '05-0/05-1', station: 'GHD', time: '1500 - 0000' },
  { code: '06X/Y', station: 'CEN', time: '1500 - 0000' },
  { code: '07X/Y', station: 'MMT', time: '1500 - 0000' },
  { code: '08X/Y', station: 'SJM', time: '1500 - 0000' },
  { code: '09X/Y', station: 'MAN', time: '1500 - 0000' },
  { code: '11-0/11-1', station: 'NSH', time: '1500 - 0000' },
  { code: '12X/Y', station: 'HAY', time: '1500 - 0000' },
  { code: '18', station: 'PLI', time: '1500 - 0000' }
];

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

// Build UI and wire Tom Select
days.forEach((day, idx) => {
  const list = day === 'Sunday' ? dutiesSunday : day === 'Saturday' ? dutiesSaturday : dutiesWeekday;

  const div = document.createElement('div');
  div.className = 'day';
  const selectId = `select-${day}`;

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
    placeholder: "-- Select Duty Code --",
    onDropdownOpen: function () {
      document.querySelectorAll('.day').forEach(d => (d.style.zIndex = '1'));
      const parentDay = this.control.closest('.day');
      if (parentDay) parentDay.style.zIndex = '1000';
    },
    onDropdownClose: function () {
      const parentDay = this.control.closest('.day');
      if (parentDay) parentDay.style.zIndex = '1';
    }
  });

  document.getElementById(selectId).addEventListener('change', () => {
    const val = document.getElementById(selectId).value;
    const duty = list.find(d => d.code === val);
    const detailDiv = document.getElementById(`details-${day}`);

    if (val && duty) {
      selectedDuties[day] = val;
      detailDiv.textContent = `${stationNames[duty.station] || duty.station} - ${duty.time}`;
    } else {
      delete selectedDuties[day];
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
      ? `<strong>${dateStr}:</strong> ${duty.code} = ${stationNames[duty.station] || duty.station} - ${duty.time}`
      : `<strong>${dateStr}:</strong> RD`;
    summaryContent.appendChild(div);
  });

  summaryContainer.style.display = 'block';
  copyBtn.style.display = 'inline-block';
});

exportBtn.addEventListener('click', () => {
  let ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//DutyPlanner//EN\n`;
  Object.entries(selectedDuties).forEach(([day, code]) => {
    const list = day === 'Sunday' ? dutiesSunday : day === 'Saturday' ? dutiesSaturday : dutiesWeekday;
    const duty = list.find(d => d.code === code);
    const offset = days.indexOf(day);
    const [start, end] = parseDutyTime(duty.time, offset);

    ics += `BEGIN:VEVENT\nSUMMARY:${duty.code} = ${stationNames[duty.station] || duty.station}\n`;
    ics += `DTSTART:${toICSDate(start)}\nDTEND:${toICSDate(end)}\n`;
    ics += `LOCATION:${stationNames[duty.station] || duty.station}\n`;
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

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
  if (!confirm('Are you sure you want to clear all selections and reset the planner?')) return;

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
  printBtn.disabled = true;
  exportBtn.disabled = true;
});

// ✅ Copy weekly summary to clipboard (simple, legacy-friendly version)
copyBtn.addEventListener('click', () => {
  const lines = Array.from(summaryContent.querySelectorAll('.summary-day'))
    .map(div => div.innerText.trim())
    .filter(Boolean);

  const textToCopy = lines.join('\n');

  if (!textToCopy) {
    copyMsg.textContent = 'Nothing to copy yet.';
    copyMsg.style.display = 'block';
    setTimeout(() => { copyMsg.style.display = 'none'; }, 2000);
    return;
  }

  // Create a hidden textarea, copy, then remove it
  const tempArea = document.createElement('textarea');
  tempArea.value = textToCopy;
  tempArea.style.position = 'fixed';
  tempArea.style.top = '-9999px';
  document.body.appendChild(tempArea);
  tempArea.focus();
  tempArea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.error('execCommand copy failed:', err);
  }
  document.body.removeChild(tempArea);

  if (success) {
    copyMsg.textContent = 'Copied!';
  } else {
    copyMsg.textContent = 'Copy failed';
  }
  copyMsg.style.display = 'block';
  setTimeout(() => { copyMsg.style.display = 'none'; }, 2000);
});
