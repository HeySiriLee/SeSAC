package practice_java;

import java.util.Scanner;

public class java_08_RectangleArea {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter the width and height separated by a space.");

        int width = scanner.nextInt();
        int height = scanner.nextInt();
        if (width <= 0 && height <= 0) {
            System.out.println("The width and height must be positive integers.");
            return;
        }

        Rectangle rectangle = new Rectangle(width, height);
        System.out.println("Area of a square: " + rectangle.area());

        scanner.close();
    }
}

class Rectangle {
    public int width;
    public int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public int area() {
        return width * height;
    }
}