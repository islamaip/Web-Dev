def not_string(str):
  if('not' == str[:3]):
    return str
  return 'not ' + str

print(not_string('candy'), not_string('notbike'), not_string('bikenot'))