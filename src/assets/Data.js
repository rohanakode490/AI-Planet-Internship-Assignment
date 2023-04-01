// // data will contain: -
// // 1. Title
// // 2. Summary
// // 3. Description
// // 4. Time
// // 5. Cover Image
// // 6. Hackthon Name
// // 7. Hackthon Start Date
// // 8. Hackthon End Date
// // 9. Github link
// // 10. Other links
// // 11. Favourite

// const imgtobase64 = (url) => {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then(response => response.blob())
//         .then(blob => {
//           const reader = new FileReader();
//           reader.onload = () => {
//             resolve(reader.result);
//           };
//           reader.onerror = reject;
//           reader.readAsDataURL(blob);
//         })
//         .catch(reject);
//     });
//   };

// const data = [
//   {
//     title: "InterviewMe",
//     summary:
//       "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere.  Lacus luctus lacus consequat dolor Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.  Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas",
//     time: new Date("2023-03-12 10:00:00"),
//     coverImage: '',
//     hackthonName: "Prestige Interview Challenge",
//     hackthonStartDate: new Date("2023-02-24 00:00:00"),
//     hackthonEndDate: new Date("2023-03-24 11:59:59"),
//     githubLink: "https://github.com/myusername/myproject",
//     otherLinks: ["https://example.com/link1", "https://example.com/link12"],
//     favourite: false,
//   },
//   {
//     title: "Lorem Ipsum",
//     summary:
//       "Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae fugit mollitia repudiandae. Repellat quod explicabo cumque nobis facere, temporibus voluptate cupiditate pariatur! Hic velit quod nam eaque assumenda, voluptatem suscipit! Minus reiciendis sed iste beatae? Necessitatibus quaerat, minima ducimus vel est quisquam quidem numquam molestiae provident atque amet laborum temporibus tempore voluptatem magni sed, assumenda expedita asperiores nihil dolore. Suscipit eligendi perspiciatis fugit iste officia pariatur autem sequi in blanditiis hic qui consequatur possimus vitae fuga, reiciendis minus voluptatum illum numquam quo? Quisquam placeat eligendi, reprehenderit quos doloribus obcaecati veniam autem magnam quidem, expedita fugit, necessitatibus aut qui assumenda corporis. Deleniti consequuntur dolore, est asperiores optio natus cum ab qui adipisci vero, incidunt repellendus exercitationem laboriosam quasi eum recusandae facere laudantium dolorem ad aperiam. Nemo in minima cumque fugiat. Similique sint aperiam neque ut quidem quia veniam, incidunt ipsa alias sapiente deserunt explicabo unde odit! Perferendis officia unde accusantium mollitia, obcaecati nostrum dolore eligendi error neque doloribus ipsa nihil inventore saepe tempore sunt veritatis magni eaque delectus est excepturi facilis explicabo illum fugiat debitis! Voluptate vel voluptatum nihil fugiat? Neque aliquam aspernatur nemo dolor reprehenderit minus porro libero, aperiam, cum asperiores consectetur ut error at ducimus, a provident enim?",
//     time: new Date("2023-03-10 8:30:00"),
//     coverImage: imgtobase64('./Lorem-ipsum.png'),
//     hackthonName: "Hackathon X",
//     hackthonStartDate: new Date("2023-02-24 00:00:00"),
//     hackthonEndDate: new Date("2023-03-24 11:59:59"),
//     githubLink: "https://github.com/myusername/myproject2",
//     otherLinks: ["https://example.com/link2"],
//     favourite: false,
//   },
//   {
//     title: "Potter Ipsum",
//     summary:
//       "Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti quia incidunt suscipit in quas, aperiam maxime a accusantium voluptate praesentium vitae, officia, iusto deserunt. Ducimus deleniti, totam, veritatis minus enim ipsa sit ipsam, numquam neque vitae in sed blanditiis odit. Nesciunt, officia a odio illo, nihil numquam natus hic voluptatem fuga eaque esse. Nam aperiam quisquam facere odit? Quia ex dolore ut repellendus consequuntur, fugiat voluptate! Doloribus, culpa natus quis minima error asperiores quia quos. Consequatur quaerat officiis eum neque quisquam fugiat tempora facere dolor vero labore, molestias qui harum, asperiores cumque? Sint at aperiam a tempora quasi perspiciatis!",
//     time: new Date("2023-03-09 14:00:00"),
//     coverImage: imgtobase64('./Potter-ipsum.png'),
//     hackthonName: "Hackathon X",
//     hackthonStartDate: new Date("2023-02-24 00:00:00"),
//     hackthonEndDate: new Date("2023-03-24 11:59:59"),
//     githubLink: "https://github.com/myusername/myproject3",
//     otherLinks: ["https://example.com/link3"],
//     favourite: false,
//   },
//   {
//     title: "Pizza Impsum",
//     summary: "Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae fugit mollitia repudiandae. Repellat quod explicabo cumque nobis facere, temporibus voluptate cupiditate pariatur! Hic velit quod nam eaque assumenda, voluptatem suscipit! Minus reiciendis sed iste beatae? Necessitatibus quaerat, minima ducimus vel est quisquam quidem numquam molestiae provident atque amet laborum temporibus tempore voluptatem magni sed, assumenda expedita asperiores nihil dolore. Suscipit eligendi perspiciatis fugit iste officia pariatur autem sequi in blanditiis hic qui consequatur possimus vitae fuga, reiciendis minus voluptatum illum numquam quo? Quisquam placeat eligendi, reprehenderit quos doloribus obcaecati veniam autem magnam quidem, expedita fugit, necessitatibus aut qui assumenda corporis. Deleniti consequuntur dolore, est asperiores optio natus cum ab qui adipisci vero, incidunt repellendus exercitationem laboriosam quasi eum recusandae facere laudantium dolorem ad aperiam. Nemo in minima cumque fugiat. Similique sint aperiam neque ut quidem quia veniam, incidunt ipsa alias sapiente deserunt explicabo unde odit! Perferendis officia unde accusantium mollitia, obcaecati nostrum dolore eligendi error neque doloribus ipsa nihil inventore saepe tempore sunt veritatis magni eaque delectus est excepturi facilis explicabo illum fugiat debitis! Voluptate vel voluptatum nihil fugiat? Neque aliquam aspernatur nemo dolor reprehenderit minus porro libero, aperiam, cum asperiores consectetur ut error at ducimus, a provident enim?",
//     time: new Date("2023-03-06 19:25:00"),
//     coverImage: imgtobase64('./Pizza-Ipsum.png'),
//     hackthonName: "Hackathon X",
//     hackthonStartDate: new Date("2023-02-24 00:00:00"),
//     hackthonEndDate: new Date("2023-03-24 11:59:59"),
//     githubLink: "https://github.com/myusername/myproject4",
//     otherLinks: [
//       "https://example.com/link41",
//       "https://example.com/link42",
//       "https://example.com/link43",
//     ],
//     favourite: false,
//   },
//   {
//     title: "Figma Ipsum",
//     summary:
//       "Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti quia incidunt suscipit in quas, aperiam maxime a accusantium voluptate praesentium vitae, officia, iusto deserunt. Ducimus deleniti, totam, veritatis minus enim ipsa sit ipsam, numquam neque vitae in sed blanditiis odit. Nesciunt, officia a odio illo, nihil numquam natus hic voluptatem fuga eaque esse. Nam aperiam quisquam facere odit? Quia ex dolore ut repellendus consequuntur, fugiat voluptate! Doloribus, culpa natus quis minima error asperiores quia quos. Consequatur quaerat officiis eum neque quisquam fugiat tempora facere dolor vero labore, molestias qui harum, asperiores cumque? Sint at aperiam a tempora quasi perspiciatis!",
//     time: new Date("2023-03-03 23:48:29"),
//     coverImage: imgtobase64('./Figma-ipsum.png'),
//     hackthonName: "Hackathon Y",
//     hackthonStartDate: new Date("2023-02-24 00:00:00"),
//     hackthonEndDate: new Date("2023-03-24 11:59:59"),
//     githubLink: "https://github.com/myusername/myproject5",
//     otherLinks: ["https://example.com/link5"],
//     favourite: false,
//   },
//   {
//     title: "Office Ipsum",
//     summary:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae fugit mollitia repudiandae. Repellat quod explicabo cumque nobis facere, temporibus voluptate cupiditate pariatur! Hic velit quod nam eaque assumenda, voluptatem suscipit! Minus reiciendis sed iste beatae? Necessitatibus quaerat, minima ducimus vel est quisquam quidem numquam molestiae provident atque amet laborum temporibus tempore voluptatem magni sed, assumenda expedita asperiores nihil dolore. Suscipit eligendi perspiciatis fugit iste officia pariatur autem sequi in blanditiis hic qui consequatur possimus vitae fuga, reiciendis minus voluptatum illum numquam quo? Quisquam placeat eligendi, reprehenderit quos doloribus obcaecati veniam autem magnam quidem, expedita fugit, necessitatibus aut qui assumenda corporis. Deleniti consequuntur dolore, est asperiores optio natus cum ab qui adipisci vero, incidunt repellendus exercitationem laboriosam quasi eum recusandae facere laudantium dolorem ad aperiam. Nemo in minima cumque fugiat. Similique sint aperiam neque ut quidem quia veniam, incidunt ipsa alias sapiente deserunt explicabo unde odit! Perferendis officia unde accusantium mollitia, obcaecati nostrum dolore eligendi error neque doloribus ipsa nihil inventore saepe tempore sunt veritatis magni eaque delectus est excepturi facilis explicabo illum fugiat debitis! Voluptate vel voluptatum nihil fugiat? Neque aliquam aspernatur nemo dolor reprehenderit minus porro libero, aperiam, cum asperiores consectetur ut error at ducimus, a provident enim?",
//     time: new Date("2023-02-28 4:47:47"),
//     coverImage: imgtobase64('./Office-ipsum.png'),
//     hackthonName: "Hackathon X",
//     hackthonStartDate: new Date("2023-02-24 00:00:00"),
//     hackthonEndDate: new Date("2023-03-24 11:59:59"),
//     githubLink: "https://github.com/myusername/myproject6",
//     otherLinks: [],
//     favourite: false,
//   },
// ];

// // localStorage.setItem("data", JSON.stringify(data));
// imgtobase64('./InterviewMe.png')
//   .then(base64Image => {
//     data[0].coverImage = base64Image;
//     console.log(data[0].coverImage);
//   })
//   .catch(error => {
//     console.error(error);
//   });
