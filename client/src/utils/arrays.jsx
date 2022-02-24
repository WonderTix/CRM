export const anchors = [
  { title: "Accounts", link: "/accounts" },
  { title: "Contacts", link: "/contacts" },
  { title: "Reporting", link: "/reporting" },
  { title: "Tasks", link: "/tasks" },
];

export const accountHeaders = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "username", headerName: "Username", flex: 10 },
  { field: "is_superadmin", headerName: "Admin", flex: 1 },
];
export const contactHeaders = [
  { field: "id", headerName: "ID", minWidth: 50 },
  { field: "custname", headerName: "Name", minWidth: 200 },
  { field: "email", headerName: "Email", minWidth: 250 },
  { field: "phone", headerName: "Phone", minWidth: 150 },
  { field: "custaddress", headerName: "Address", minWidth: 300 },
  { field: "newsletter", headerName: "Newsletter", minWidth: 50 },
  { field: "donor badge", headerName: "Donor", minWidth: 50 },
  { field: "seatingaccom", headerName: "Seating Accomodation", minWidth: 200 },
  { field: "vip", headerName: "VIP", minWidth: 50 },
  { field: "volunteer list", headerName: "Volunteer List", minWidth: 150 },
];
export const donationHeaders = [
  { field: "id", headerName: "ID" },
  { field: "donorid", headerName: "Donor ID", minWidth: 200 },
  { field: "isanonymous", headerName: "Anonymous", minWidth: 200 },
  { field: "amount", headerName: "Amount", minWidth: 200 },
  { field: "dononame", headerName: "Name", minWidth: 200 },
  { field: "frequency", headerName: "Frequency", minWidth: 200 },
  { field: "comments", headerName: "Comments", minWidth: 200 },
  { field: "donodate", headerName: "Date", minWidth: 200 },
];

export const accountFiltersTextField = [{ label: "Username", id: "username" }];

export const accountFiltersSwitch = [{ label: "Admin", id: "is_superadmin" }];

export const contactFiltersTextField = [
  { label: "Name", id: "custname" },
  { label: "Email", id: "email" },
  { label: "Phone", id: "phone" },
  { label: "Address", id: "custaddress" },
];

export const contactFiltersSwitch = [
  { label: "VIP", id: "vip" },
  { label: "Volunteer List", id: "volunteer list" },
];

export const donationFiltersTextField = [
  { label: "Name", id: "dononame" },
  { label: "Amount", id: "amount" },
];