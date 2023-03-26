size = int(input())

numbers = list(map(int,input().split()))

cnt = 0

for i in range(0,size):
    if(numbers[i] > 0):
        cnt += 1

print(cnt)