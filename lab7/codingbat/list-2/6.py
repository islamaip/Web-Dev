def has22(nums):
  for i in range(0, len(nums)):
    if(i < len(nums)-1 and nums[i] == 2 and nums[i+1] == 2):
      return True
  return False