export function getRedirectPath({type, avatar}) {
  // 根据用户信息 返回跳转地址
  // user.type /boss /gunies
  // user.avatar /bossinfo /geniusinfo
  let url = (type === 'boss') ? '/boss' : '/genius';
  if(!avatar) {
    url += 'info';  // 没有头像去完善信息页
  }
  return url;
}

export function getChatId(userId, targetId) {
  return [userId, targetId].sort().join('_');
}