if __name__ == '__main__':
    n = int(input())
    f = [0]
    arr = list(map(int, input().split()))
    max = -101
    sec = -101
    for i in range(0, len(arr)):
        if(arr[i] > max):
            sec = max
            max = arr[i]
        elif(arr[i] < max and arr[i] > sec):
            sec = arr[i]
        
    
print(sec)