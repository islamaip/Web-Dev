def count_substring(string, sub_string):
    cnt = 0
    for i in range(0,len(string)):
        if(sub_string == string[i:len(sub_string)+i]):
            cnt += 1
    return cnt

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)