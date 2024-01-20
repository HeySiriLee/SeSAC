package _02_control_statement;

import java.util.Scanner;

public class ConditionalStatement {
    public static void main(String[] args) {
        int number = 10;

        if (number % 2 == 0) {
            System.out.println("Even number");
        } else {
            System.out.println("Odd number");
        }

        //////////
        // String object comparison
        System.out.println("Plz enter ur name >> ");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine(); // Receive a string before Enter
        System.out.println("Check a name result : " + name);

        // Bad (Using the substitute operator '==')
//        if (name == "Sesac") {
//            System.out.println("Welcome!");
//        } else {
//            System.out.println("Plz enter ur name again");
//        }

        // Good (Using the method '.equals()')
        if (name.equals("Sesac")) {
            System.out.println("Welcome!");
        } else {
            System.out.println("Plz enter ur name again");
        }

        // Why?
        // - '==' Operator: Compare reference between two objects (check if they point to the same memory location)
        // - '==' 연산자: 두 객체의 참조 비교 (동일한 메모리 위치 가르키는지 확인)
        // - '.equals()' method: Compare if the "contents" of two objects are the same
        // - '.equals()' method: 두 객체의 "내용"이 동일한지 비교

        // Special treatment in Java for "string literal"
        // "문자열 리터럴"의 경우, Java 에서 특별한 취급
        // If the same string literal is used,
        // the Java compiler stores that string in a shared memory area called the string pool
        // 동일한 문자열 리터럴이 사용되는 경우,
        // Java 컴파일러는 문자열 풀(string pool)이라는 공유된 메모리 영역에 해당 문자열 저장
        // Str1 and str2 have the same reference value because they point to the same string
        // str1, str2가 같은 문자열을 가리키고 있으므로 같은 참조값을 가짐
        String str1 = "hello";
        String str2 = "hello";

        if (str1 == str2) {
            System.out.println("Point to same references"); // Output
        } else {
            System.out.println("Point to different references");
        }

        if (str1.equals(str2)) {
            System.out.println("The same contents"); // Output
        } else {
            System.out.println("The different contents");
        }

        // For string "dynamic assignment", new string(...) is used to create new string objects
        // -> teach different objects
        // 문자열 "동적 할당"의 경우, new String(...)을 사용해서 새로운 문자열 객체를 생성
        // -> 서로 다른 객체를 가르킴
        // Str3 and str4 are different objects, so false when compared with '==' operator
        // str3, str4가 다른 객체이므로, '==' 연산자로 비교시 false
        // Therefore, it is desirable to compare using the '.equals()' method when comparing a string (content)
        // 따라서 문자열 비교시 (내용) '.equals()' 메서드로 비교하는 것이 바람직
        String str3 = new String("hi");
        String str4 = new String("hi");

        if (str3 == str4) {
            System.out.println("Point to same references");
        } else {
            System.out.println("Point to different references"); // Output
        }

        if (str3.equals(str4)) {
            System.out.println("The same contents"); // Output
        } else {
            System.out.println("The different contents");
        }


        //////////
        // Sentence 'switch ~ case'
        // - Optional break statement for each case statement.
        // - Skip the break statement and go directly to the case statement below.
        // - 각 case 문의 break 문 선택 사항,
        // - break 문 생략시 바로 밑의 case 문으로 넘어감.
        String dayOfWeek;
        int day = 4;

//        switch (day) {
//            case 1:
//                dayOfWeek = "Sunday";
//                break;
//            case 2:
//                dayOfWeek = "Monday";
//                break;
//            case 3:
//                dayOfWeek = "Tuesday";
//                break;
//            case 4:
//            case 5:
//            case 6:
//            case 7:
//                dayOfWeek = "Wednesday~Saturday";
//                break;
//            default:
//                dayOfWeek = "Invalid input.";
//                break;
//        }

        dayOfWeek = switch (day) {
            case 1 -> "Sunday";
            case 2 -> "Monday";
            case 3 -> "Tuesday";
            case 4, 5, 6, 7 -> "Wednesday~Saturday";
            default -> "Wrong Input:(";
        };

        System.out.println(dayOfWeek);
    }
}