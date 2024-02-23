import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClock } from "@fortawesome/free-solid-svg-icons";

export const listNav = [
  {
    icon: faHome,
    label: "Trang Chủ",
    path: "/",
  },
  {
    icon: faClock,
    label: "Đang diễn ra",
    path: "/live/",
  },
];

export const generalData = [
  {
    image: "/item1.webp",
    subject: "Đá quý",
    date: "10/9/2023",
    seller: "Abc",
    location: "Đồng nai",
    favorites: 400,
    items: [
      {
        image: "/item1.webp",
        subject: "Đá quý 1",
        date: "3/9/2023",
        seller: "Abc",
        location: "Đồng nai",
        favorites: 400,
        describe:
          "lorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolor",
      },
      {
        image: "/item1.webp",
        subject: "Đá quý 2",
        date: "3/8/2023",
        seller: "Abc",
        location: "Đồng nai",
        favorites: 400,
        describe:
          "lorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolorlorem ipsum dolor sit amet, consect, orci, in. Lorem ipsum dolor",
      },
    ],
  },
  {
    image: "/item2.jpg",
    subject: "Đồng hồ",
    date: "24/10/2023",
    seller: "Abc",
    location: "Long An",
    favorites: 1000,
    items: null,
  },
  {
    image: "/item1.jpg",
    subject: "Tranh",
    date: "24/10/2023",
    seller: "Abc",
    location: "Long An",
    favorites: 1000,
    items: null,
  },
];
