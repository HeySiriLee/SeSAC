package practice_java;

import java.util.ArrayList;
import java.util.Scanner;


public class java_09_StudentList {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Enter name, student ID, and grade, type 'list' to display all students (or type 'exit' to finish):");

            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("list")) {
                for (StudentList s : StudentList.getStudentList()) {
                    s.displayInfo();
                }
                System.out.println("==========");
                System.out.println("Total Students: " + StudentList.getTotalStudents());
                continue;
            }

            if (input.equalsIgnoreCase("exit")) {
                break;
            }

            String[] parts = input.split(" ");
            if (parts.length < 3) {
                System.out.println("Invalid input. Please enter name, student ID, and grade.");
                continue;
            }

            String inputName = parts[0];
            int inputStudent_ID;
            int inputGrade;

            try {
                inputStudent_ID = Integer.parseInt(parts[1]);
                inputGrade = Integer.parseInt(parts[2]);
            } catch (NumberFormatException e) {
                System.out.println("Invalid number format. Please enter valid student ID and grade.");
                continue;
            }

            StudentList student = new StudentList(inputName, inputStudent_ID, inputGrade);
            StudentList.getStudentList().add(student);
        }

        scanner.close();
    }

}


class StudentList {
    private String name;
    private int student_ID;
    private int grade;

    private static int totalStudents = 0;
    private static ArrayList<StudentList> studentList = new ArrayList<>();

    public StudentList(String name, int student_ID, int grade) {
        this.name = name;
        this.student_ID = student_ID;
        this.grade = grade;
        totalStudents++;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }
    public int getStudent_ID() {
        return student_ID;
    }
    public void setGrade(int grade) {
        this.grade = grade;
    }
    public int getGrade() {
        return grade;
    }

    public static int getTotalStudents() {
        return totalStudents;
    }
    public static ArrayList<StudentList> getStudentList() {
        return studentList;
    }
    public void displayInfo() {
        System.out.println("=====");
        System.out.println("Name: " + name);
        System.out.println("StudentList ID: " + student_ID);
        System.out.println("Grade: " + grade);
    }
}
