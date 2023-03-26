size = int(input())

numbers = list(map(int,input().split()))
cnt = size - 1

for i in range(0,int(size/2)):
    last = numbers[i]
    numbers[i] = numbers[cnt]
    numbers[cnt] = last
    cnt -= 1

for i in numbers:
    print(i,end=' ')