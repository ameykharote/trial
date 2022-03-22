class starpattern
{
    int i, j, n = 5;
    public void printStars(){
        for(i = 0 ; i <= n; i++){
            for(j = 0; j <= i; j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String arg[]) 
    {
        starpattern obj = new starpattern();
        obj.printStars();
    }
}