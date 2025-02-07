export interface IUserPost {
  firstName: string;
  lastName: string;
  location?: string;
  likes: number;
  comments: number;
  bookmarks: number;
  id: number;
  postImage: any;
  profileImage: any;
}

export const userPosts: IUserPost[] = [
  {
    firstName: 'Marcela',
    lastName: 'Barros',
    location: 'Santa Fe, Arg.',
    likes: 100,
    comments: 8,
    bookmarks: 12,
    id: 1,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Franco',
    lastName: 'Lillo',
    //location: 'Buenos Aires, Arg.',
    likes: 23,
    comments: 18,
    bookmarks: 5,
    id: 2,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Micaela',
    lastName: 'Mur',
    location: 'Salta, Arg.',
    likes: 3,
    comments: 14,
    bookmarks: 15,
    id: 3,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Juan',
    lastName: 'Nallim',
    location: 'Mendoza, Arg.',
    likes: 19,
    comments: 5,
    bookmarks: 4,
    id: 4,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Pedro',
    lastName: 'Maradona',
    location: 'Buenos Aires, Arg.',
    likes: 31,
    comments: 9,
    bookmarks: 7,
    id: 5,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Fernanda',
    lastName: 'Juarez',
    location: 'Buenos Aires, Arg.',
    likes: 6,
    comments: 1,
    bookmarks: 10,
    id: 6,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Gabriel',
    lastName: 'Chaco',
    location: 'La Pampa, Arg.',
    likes: 21,
    comments: 8,
    bookmarks: 9,
    id: 7,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    firstName: 'Juliana',
    lastName: 'Moreno',
    location: 'Mendoza, Arg.',
    likes: 16,
    comments: 7,
    bookmarks: 3,
    id: 8,
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  },
];
