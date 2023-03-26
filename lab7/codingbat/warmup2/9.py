def string_match(a, b):
  cnt = 0
  s = len(b)
  if(len(a) < len(b)):
    s = len(a)
  for i in range(s-1):
    if(a[i:i+2] == b[i:i+2]):
      cnt += 1
  return cnt

print(string_match('xxcaazz', 'xxbaaz'),string_match('abc', 'abc'),string_match('abc', 'axc'))