package _01_basic_syntax;

import java.util.Scanner;

// InputOutput
public class InputOutput {
    public static void main(String[] args) {
        // Output
        System.out.print("Hello, \n"); // "\n" : 엔터 역할 다음 줄은 줄바꿈되어 입력됨.
        System.out.println("I'm Sesac!");
        System.out.println("Nice to meet you.");

        // Input
        // - Use the Scanner Class
        System.out.println("Please enter your Name/Age/Height/marriage separated by spaces >>");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.next(); // Read string before space.
        int age = scanner.nextInt(); // Read integer before space.
        double height = scanner.nextDouble(); // Read real number before blank.
        boolean single = scanner.nextBoolean(); // Read boolean before blank.

        System.out.println("--- Input Result Output ---");
        System.out.println("Name : " + name);
        System.out.println("Age : " + age);
        System.out.println("Height : " + height);
        System.out.println("Marriage : " + single);

        scanner.close(); // Close scanner

    }
}
