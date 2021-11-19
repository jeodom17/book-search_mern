import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($userName: String!, $email: String!, password: String!) {
        addUser(userName: $userName, email: $email, password: $password) {
            _id
            userName
            email
            password
            createdAt
            books {
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