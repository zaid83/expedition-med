<?php
class Autoloader
{
    public static function Autoload()
    {
        spl_autoload_register(function ($classname) {
            $classname = str_replace("\\", "/", $classname);
            if (file_exists($classname . ".php")) {
                require $classname . ".php";
            } else {
                var_dump($classname);
                echo "erreur 404";
                exit();
            }
        });
    }
}
//
