import Storage from '@Utils/Storage';


const getAccount = async()=>{
  return await Storage.get('account');
}

const setAccount = async(data)=>{
  return await Storage.set('account', data);
}


const removeAccount = async()=>{
  return await Storage.remove('account', null);
}


export default {
  removeAccount,
  getAccount,
  setAccount
};
