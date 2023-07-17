// class Person {
//     constructor(name, instagram) {
//         this.name = name;
//         this.instagram = instagram;
//     }
// }

// const data = [
//     ["Lucas Dalto", "@SoyDalto"],
//     ["Robertico", "@Robertico"],
//     ["RancioRamirez", "@RancioRamirez"],
//     ["Camila Nesa", "@Milanesa"],
// ];

// let persons = data.map((personData) => {
//     return new Person(personData[0], personData[1]);
// });

// const obtainPerson = (id, callback) => {
//     persons[id] == undefined
//         ? callback("No se ha encontrado la persona")
//         : callback(null, persons[id], id);
// };

// const obtainInstagram = (id, callback) => {
//     persons[id].instagram == undefined
//         ? callback("La persona no tiene instagram")
//         : callback(null, persons[id].instagram);
// };

// obtainPerson(0, (err, person, id) => {
//     if (!err) {
//         console.log(person.name);

//         obtainInstagram(id, (err, personInstagram) => {
//             if (!err) console.log(personInstagram);
//             else console.log(err);
//         });
//     } else console.log(err);
// });

// let name = "Masdasdauro";

// const promise = new Promise((resolve, reject) => {
//     name !== "Mauro"
//         ? reject("Lo siento, el nombre no es mauro")
//         : resolve(name);
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// * ---------------------------------------------------------------------- |>

// class Person {
//     constructor(name, instagram) {
//         this.name = name;
//         this.instagram = instagram;
//     }
// }

// const getData = async (size) => {
//     try {
//         const response = await fetch(
//             `https://random-data-api.com/api/v2/users?size=${size}`
//         );
//         const data = await response.json();

//         return data.map((user) => {
//             return {
//                 name: `${user.first_name} ${user.last_name}`,
//                 instagram: user.email,
//             };
//         });
//     } catch (err) {}
// };

// const createUsers = async () => {
//     try {
//         let data = await getData(4);

//         return data.map((user) => {
//             return new Person(user.name, user.instagram);
//         });
//     } catch (err) {}
// };

// let persons = await createUsers();

// const obtainName = (index) => {
//     return new Promise((resolve, reject) => {
//         persons[index]
//             ? resolve(persons[index].name)
//             : reject("No se encontro la persona");
//     });
// };

// const obtainInstagram = (index) => {
//     return new Promise((resolve, reject) => {
//         persons[index].instagram
//             ? resolve(persons[index].instagram)
//             : reject("La persona no tiene instagram");
//     });
// };

// const obtainPerson = (index) => {
//     return new Promise((resolve, reject) => {
//         Promise.all([obtainName(index), obtainInstagram(index)])
//             .then((person) => {
//                 const [name, instagram] = person;
//                 resolve(new Person(name, instagram));
//             })

//             .catch((err) => {
//                 reject(err);
//             });
//     });
// };

// try {
//     let person = await obtainPerson(10);
//     console.log(person);
// } catch (err) {
//     console.log(err);
// }

// * ---------------------------------------------------------------------- |>

// const obtainInfo = (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, Math.random() * 200);
//     });
// };

// // obtainInfo().then((info) => console.log(info))

// // const showInfo = async () => {
// //     let info = await obtainInfo();
// //     console.log(info);
// // }

// const showData = async () => {
//     Promise.all([
//         obtainInfo("1. Pito"),
//         obtainInfo("2. Bernardo"),
//         obtainInfo("3. Eduardo"),
//     ])
//         .then((values) => {
//             values.map((value) => {
//                 console.log(value);
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

// showData();

// * ---------------------------------------------------------------------- |>

/*
    <div class="subjects__container">


        <div class="subject">
            <div class="subject__name">Lorem</div>
            <div class="subject__grade">Lorem</div>
        </div>


    </div>

*/

const subjectContainer = document.querySelector(".subjects__container");
let documentFragment = document.createDocumentFragment();

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomData = () => {
    const subjects = [
        "Calculo",
        "Fisica",
        "Quimica",
        "Programacion",
        "Ingles",
        "Filosofia",
        "Sociales",
        "Ciencias",
        "Religion",
        "Historia",
    ];

    return subjects.map((subject) => {
        return {
            name: `${subject} ${generateRandomNumber(1, 5)}`,
            grade: generateRandomNumber(0, 10),
        };
    });
};

// This is to simulate a server response

const subjects = generateRandomData();

const obtainSubject = (index) => {
    return new Promise((resolve, reject) => {
        const { [index]: subject } = subjects;

        subject
            ? setTimeout(() => {
                  resolve(subject);
              }, Math.random() * 400)
            : reject("La materia no existe");
    });
};

const createElements = async () => {
    try {
        const data = [];
        let { length } = subjects;

        for (let i = 0; i < length; i++) data.push(await obtainSubject(i));

        let elementPromises = data.map((element, index) => {
            return new Promise((resolve, reject) => {
                let subject = document.createElement("div");
                subject.classList.add("subject");

                let subjectName = document.createElement("div");
                subjectName.classList.add("subject__name");
                subjectName.textContent = element.name;

                let subjectGrade = document.createElement("div");
                subjectGrade.classList.add("subject__grade");
                subjectGrade.textContent = element.grade;

                subject.appendChild(subjectName);
                subject.appendChild(subjectGrade);

                resolve(subject);
            });
        });

        let elements = await Promise.all(elementPromises);

        elements.map((element) => documentFragment.appendChild(element));

        subjectContainer.appendChild(documentFragment);
    } catch (err) {
        console.error(err);
    }
};

const showElements = async () => {
    await createElements();
    subjectContainer.classList.add("visible");
};

showElements();