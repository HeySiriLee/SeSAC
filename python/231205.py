## SW_4835_구간합
T = int(input())

for tc in range(1, T + 1):
    N, M = map(int, input().split())
    nums = list(map(int, input().split()))
    sums = []
    for i in range(N-M+1):
        target = nums[i:i+M]
        if len(target) < M:
            break
        sums.append(sum(target))
    print(f'#{tc} {max(sums) - min(sums)}')

## BOJ_1302_베스트셀러
import sys
input = sys.stdin.readline

from collections import defaultdict

# 따로 설정하지 않는 이상 value의 디폴트값은 0
books_sales_info = defaultdict(int)

for _ in range(int(input())):
    books_sales_info[input().rstrip()] += 1 # 책이 팔릴 때마다 하나씩 카운팅

books_names = sorted(books_sales_info) # 책 제목만 뽑아서 사전순 정렬

cnt = -1
ans = ''

for book_name in books_names:
    if books_sales_info[book_name] > cnt:
        cnt = books_sales_info[book_name]
        ans = book_name

print(ans)

## BOJ_2231_분해합
N = int(input())

start = max(1, N - (9 * len(str(N)))) # 생성자는 반드시 분해합보다 작은 숫자
answer = 0

for num in range(start, N + 1):
    disassemble_sum = num + sum(map(int, str(num)))

    if disassemble_sum == N:
        answer = num
        break

print(answer)

# BOJ_8892_팰린드롬
