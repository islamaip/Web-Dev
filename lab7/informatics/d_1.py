size = int(input())

numbers = list(map(int,input().split()))

for i in range(0,size,2):
    print(numbers[i], end=' ')