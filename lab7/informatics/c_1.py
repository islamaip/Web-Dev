begin = int(input())
end = int(input())

for i in range(begin,end+1):
    if(i % 2 == 0):
        print(i, end=' ')