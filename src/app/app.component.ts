import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manav';
  data = 'How are you';
  displayval: string = " ";
  displayval2: string = " ";
  count = 0;
  name = "pranav";
  show = false;
  show2 = true;
  color = "blue";
  bgcolor = "green";
  age = 24;
  userdata: any = {};
  display = true;
  toggle() {
    this.display = !this.display 
  }
  updateC() {
    this.color = "red";
  }
  updatebg() {
    this.bgcolor = "yellow";
  }
  updatebg2() {
    this.bgcolor = "green"
  }
  formdata(data: any) {
    console.warn(data);
    this.userdata = data;
  }
  namelist = ['Manav', 'Pranav', 'Geeta', 'Deepak'];
  userslist = [
    { name: 'Manav', email: 'Manav@02', phoneno: '9213XXXXX0' },
    { name: 'Pranav', email: 'Pranav@02', phoneno: '7215XXXXX0' },
    { name: 'Geeta', email: 'Geeta@02', phoneno: '4217XXXXX0' },
    { name: 'Deepak', email: 'Deepak@02', phoneno: '8213XXXXX0' },
  ]
  lists = [
    { name: 'Mani', email: 'Mani@200', acs: ['Facebook', 'Whatsapp'] },
    { name: 'Sunny', email: 'Sunny@200', acs: ['Instagram', 'Whatsupp'] },
    { name: 'Baby', email: 'Baby@200', acs: ['Facebook', 'Linked'] }
  ]
  getName(name: string, secondname: string) {
    alert("Manav is here");
    console.log(2 * 2);
    alert(name);
    alert(secondname);
  }
  getName1(name: string, secondname: string) {
    console.log(name);
    console.log(secondname);
  }
  getdata(name: string) {
    this.displayval = name;
  }
  getdata2(name2: string) {
    this.displayval2 = name2;
  }
  counter(type: string) {
    type == 'add' ? this.count++ : this.count--;
  }
}
