import { API, graphqlOperation } from "aws-amplify";
import config from "../aws-exports";
import { listUsers, getUser } from "../graphql/queries";
import { createUser, updateUser } from "../graphql/mutations";

API.configure(config);

export const create_User = async (obj) => {
  return await API.graphql(
    graphqlOperation(createUser, {
      input: obj,
    })
  );
};

export const update_User = async (obj) => {
  return await API.graphql(
    graphqlOperation(updateUser, {
      input: obj,
    })
  );
};

export const get_User = async (id) => {
  return await API.graphql(
    graphqlOperation(getUser, {
      id: id,
    })
  );
};

export const fetchUsers = async () => {
  return await API.graphql(
    graphqlOperation(listUsers, {
      limit: 1000,
    })
  );
};

export const fetchUserByEmail = async (email) => {
  return await API.graphql(
    graphqlOperation(listUsers, {
      filter: { email: { eq: email } },
      limit: 1000,
    })
  );
};
