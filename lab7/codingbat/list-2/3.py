def centered_average(nums):
  nums.sort()
  f = []
  for i in range(1,len(nums)-1):
    f.append(nums[i])
  return sum(f)/len(f)