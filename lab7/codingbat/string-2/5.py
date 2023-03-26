def end_other(a, b):
  if(a.lower() in b[-len(a):].lower() or b.lower() in a[-len(b):].lower()):
    return True
  return False