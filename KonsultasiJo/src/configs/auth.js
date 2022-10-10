import Storage from '@Utils/Storage';


const getAccount = async()=>{
  return await Storage.get('account');
}

const setAccount = async(data)=>{
  return await Storage.set('account', data);
}


const logout = async()=>{
  return await Storage.set('account', null);
}


export default {
  logout,
  getAccount,
  setAccount
};
