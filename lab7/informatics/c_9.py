num = int(input())
cnt = 1

for i in range(1,int(num/2) + 1):
    if(num % i == 0):
           cnt += 1

print(cnt)