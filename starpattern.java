class starpattern
{
    int i, j, n = 4;
    public void printStars(){
        for(i = n ; i >= 0; i--){
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