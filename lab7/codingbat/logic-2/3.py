def lucky_sum(a, b, c):
  sum = 0
  if(a == 13):
    return 0
  if(b == 13):
    return a
  if(c == 13):
    return a + b
  return a + b + c