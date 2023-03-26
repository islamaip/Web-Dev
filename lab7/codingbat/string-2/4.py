def count_code(str):
  cnt = 0
  for i in range(0,len(str)-3):
    fin = str[i:i+4]
    if(fin[0:2]+fin[3] == 'coe'):
      cnt += 1
  return cnt
