class userDataType {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;

  constructor(
    name: string,
    phone: string,
    email: string,
    address: string,
    position_name: string,
    department: string,
    hire_date: string
  ) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.position_name = position_name;
    this.department = department;
    this.hire_date = hire_date;
  }
}

export default userDataType;
