'use strict';

const results = document.querySelector(".results");

function appendDOM(item) {
    const p = document.createElement('p');
    p.innerText = item;
    results.append(p);
    return;
}

class Person {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.friends = [];
    }
  
    greet(otherPerson) {
        appendDOM(`Hello ${otherPerson.name}, I am ${this.name}!`);
    }
  
    print_contact_info() {
        appendDOM(`${this.name}'s email: ${this.email}\n${this.name}'s phone number: ${this.phone}`);
    }
  
    add_friend(friend) {
        this.friends.push(friend);
    }
  
    num_friends() {
        return this.friends.length;
    }
  
    list_friends() {
        this.friends.forEach((person) => {
            appendDOM(person.name);
      });
    }
  }
  
  const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
  const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
  
  sonny.greet(jordan);
  jordan.greet(sonny);
  appendDOM(sonny.email, sonny.phone);
  appendDOM(`Name: ${jordan.name}, Email: ${jordan.email}, Phone: ${jordan.phone}`);
  sonny.print_contact_info();
  // jordan.friends.push(sonny);
  // sonny.friends.push(jordan);
  // console.log(jordan.friends.length);
  jordan.add_friend(sonny);
  appendDOM(jordan.num_friends());
  jordan.list_friends();
  
  
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    print_info() {
      appendDOM(`${this.year} ${this.make} ${this.model}`);
    }
  }
  
  const car = new Vehicle('Honda', 'CRV', '2020');
  car.print_info();