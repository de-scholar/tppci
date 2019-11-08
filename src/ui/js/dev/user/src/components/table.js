export const applicationTableHead = (div, tbl) => {
  const header = document.createElement('header');
  header.innerHTML = 'List of all applications';

  const thd = document.createElement('thead');
  const trhead = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  const th4 = document.createElement('th');
  const th5 = document.createElement('th');
  const th6 = document.createElement('th');
  const th7 = document.createElement('th');
  const th8 = document.createElement('th');
  const th9 = document.createElement('th');
  const th10 = document.createElement('th');
  const th11 = document.createElement('th');
  const th12 = document.createElement('th');
  const th13 = document.createElement('th');
  const th14 = document.createElement('th');

  th1.innerHTML = 'App Id';
  th2.innerHTML = 'Family name';
  th3.innerHTML = 'Middle name';
  th4.innerHTML = 'Last name';
  th5.innerHTML = 'Residence';
  th6.innerHTML = 'Occupation';
  th7.innerHTML = 'Age';
  th8.innerHTML = 'Email';
  th9.innerHTML = 'Phone number';
  th10.innerHTML = 'Motivation';
  th11.innerHTML = 'Appied at';
  th12.innerHTML = 'Confirmed';
  th13.innerHTML = 'Replied';
  th14.innerHTML = 'Action';

  trhead.appendChild(th1);
  trhead.appendChild(th2);
  trhead.appendChild(th3);
  trhead.appendChild(th4);
  trhead.appendChild(th5);
  trhead.appendChild(th6);
  trhead.appendChild(th7);
  trhead.appendChild(th8);
  trhead.appendChild(th9);
  trhead.appendChild(th10);
  trhead.appendChild(th11);
  trhead.appendChild(th12);
  trhead.appendChild(th13);
  trhead.appendChild(th14);

  thd.appendChild(trhead);

  tbl.appendChild(thd);
  div.appendChild(header);
  //   div.appendChild(tbl);
};

export const applicationTableBody = (div, app, tbl, returnedapps) => {
  const trbody = document.createElement('tr');

  const tbody = document.createElement('tbody');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  const td6 = document.createElement('td');
  const td7 = document.createElement('td');
  const td8 = document.createElement('td');
  const td9 = document.createElement('td');
  const td10 = document.createElement('td');
  const td11 = document.createElement('td');
  const td12 = document.createElement('td');
  const td13 = document.createElement('td');
  const td14 = document.createElement('td');

  td1.innerHTML = app.application_id;
  td2.innerHTML = app.fname;
  td3.innerHTML = app.middle_name;
  td4.innerHTML = app.lname;
  td5.innerHTML = app.country_residence;
  td6.innerHTML = app.occupation;
  td7.innerHTML = app.date_of_birth;
  td8.innerHTML = app.email;
  td9.innerHTML = app.phone_number;
  td10.innerHTML = app.motivation;
  td11.innerHTML = app.applied_at;
  td12.innerHTML = app.confirmed;
  td13.innerHTML = app.replied;
  td14.innerHTML = '<button type="button">Details</button>';

  trbody.appendChild(td1);
  trbody.appendChild(td2);
  trbody.appendChild(td3);
  trbody.appendChild(td4);
  trbody.appendChild(td5);
  trbody.appendChild(td6);
  trbody.appendChild(td7);
  trbody.appendChild(td8);
  trbody.appendChild(td9);
  trbody.appendChild(td10);
  trbody.appendChild(td11);
  trbody.appendChild(td12);
  trbody.appendChild(td13);
  trbody.appendChild(td14);

  tbody.appendChild(trbody);

  tbl.appendChild(tbody);

  div.appendChild(tbl);

  returnedapps.appendChild(div);
};
