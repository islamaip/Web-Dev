begin = int(input())
end = int(input())
k = int(input())
num = int(input())

for i in range(begin,end+1):
    if(i % num == k):
        print(i,end=' ')