def array123(nums):
  for i in range(len(nums)):
    if(nums[i:i+3]==[1,2,3]):
      return True
  return False

print(array123([1, 1, 2, 3, 1]),array123([1, 1, 2, 4, 1]))