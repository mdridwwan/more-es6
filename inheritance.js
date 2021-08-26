class TeamMember {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {

    startSession() {
        console.log(this.name, 'start a support session')
    }
}

class StudentCare extends TeamMember {

    bulidARoutine(student) {
        console.log(this.name, 'bulid a routine for', student);
    }
}

const alia = new StudentCare('alia vhat', 'mumbai');
console.log(alia);


const ridwan = new Support('RIdwan Khan', 'digoldi');
const rohan = new Support('Rohan Khan', 'sabdi');
const sajid = new Support('Sajid Khan', 'dhaka');
const emon = new Support('Emon Khan', 'Brisal');
const siam = new Support('Siam Khan', 'bandar');
ridwan.startSession();
sajid.startSession();
// console.log(ridwan);
// console.log(rohan);
// console.log(sajid);
// console.log(emon);
console.log(siam);