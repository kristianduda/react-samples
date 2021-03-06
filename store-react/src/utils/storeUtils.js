import { init, store } from 'kd-web';

const COLLECTION = 'todos';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNWRmMTRmZTA3YzIxM2U3ZjE5NWU2YmYxIiwiaWF0IjoiMTYwNTg2MDA3NCIsImV4cCI6MTYzNzM5NjA3NCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDA2MS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDYxLyJ9.Ue08GTJhxfWOZsp-TJ9f1-QFf8yDcxAj7OF9DG5A7aM';
init({ key: KEY });

export const getTodos = async () => {
  try {
    const res = await store.get(COLLECTION);
    return res.data;
  }
  catch(e) {
    throw e;
  }
}

export const addTodo = async (text) => {
  const newItem = {
    text,
    completed: false
  };

  try {
    const res = await store.post(COLLECTION, newItem);
    return res;
  }
  catch(e) {
    throw e;
  }
}

export const toggleTodo = async (todo) => {
  const newItem = {...todo, completed: !todo.completed};

  try {
    const res = await store.put(COLLECTION, newItem, newItem._id);
    return res;
  }
  catch(e) {
    throw e;
  }
}

export const clear = async () => {
  const filters = [{ field: 'completed', op: 'eq', value: true }];

  try {
    await store.del(COLLECTION, filters);
  }
  catch(e) {
    throw e;
  }
}
