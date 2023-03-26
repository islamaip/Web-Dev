def xyz_there(str):
  for i in range(0,len(str)-2):
    cnt = 0
    s = 0
    if(str[i:i+3] == 'xyz' and str[i-1] == '.'):
      cnt += 1
    elif(str[i:i+3] == 'xyz' and str[i-1] != '.'):
      s += 1
    if(cnt < s):
      return True
  return False