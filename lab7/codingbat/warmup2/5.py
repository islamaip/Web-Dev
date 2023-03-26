def last2(str):
  cnt = 0
  for i in range(0, len(str)-2):
    if(str[len(str)-2:] == str[i:i+2]):
      cnt += 1
  return cnt

print(last2('hixxhi'),last2('xaxxaxaxx'),last2('axxxaaxx'))