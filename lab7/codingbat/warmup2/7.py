def array_front9(nums):
  cnt = 0
  for i in nums:
    cnt += 1
    if(i == 9 and cnt <= 4):
      return True
  return False