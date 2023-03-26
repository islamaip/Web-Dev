def caught_speeding(speed, is_birthday):
  if(is_birthday and speed <= 65):
    return 0
  if(is_birthday and speed >=66 and speed <= 85):
    return 1
  if(is_birthday and speed >= 86):
    return 2
  elif(speed <= 60):
    return 0
  elif(speed >= 62 and speed <= 80):
    return 1
  return 2
