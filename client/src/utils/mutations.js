import { gql } from '@apollo/client';

//* execute the loginUser mutation set up using Apollo Server.

export const LOGIN_USER = gql`
mutation login($username: String, $email: String, $password: String!) {


`;

//* execute addUser mutation
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }   

`;


//* execute removeBook function
export const SAVE_BOOK = gql`
mutation saveBook(
    $bookId: String!
    $authors: [String]
    $title: String!
    $description: String!
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      authors: $authors
      title: $title
      description: $description
      image: $image
      link: $link
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }


`;

//* execute removeBook mutation
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        userName
        email
        password
        createdAt
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}


`;



//* FOR REFERENCE ONLY
// addUser: async (parent, { username, email, password }) => {
//     const user = await User.create({ username, email, password });
//     const token = signToken(user);
//     return { token, user };
//   },