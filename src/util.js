export function getRedirectPath(type, avatar) {
  console.log("ff" + JSON.stringify(type))
  // 根据用户信息 返回跳转地址
  // user.type /boss /gunies
  // user.avatar /bossinfo /geniusinfo
  let url = (type.type === 'boss') ? '/boss' : '/genius';
  if(!avatar) {
    url += 'info';
  }
  return url;
}

export function getChatId(userId, targetId) {
  return [userId, targetId].sort().join('_');
}