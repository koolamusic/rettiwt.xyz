export const _VECTOR_SOURCE_COLUMN_ = 'text';
export const _GPT3_MODEL_ = 'gpt-3.5-turbo-0301'; // The initial slightly-aligned version of 3.5
export const _GPT4_MODEL_ = 'gpt-4-0314';

/* Function calling OpenAI models */
export const _GPT4_MODEL_06_ = 'gpt-4-0613';
export const _GPT3_MODEL_06_ = 'gpt-3.5-turbo-0613';
export const _GPT316K_MODEL_ = 'gpt-3.5-turbo-16k-0613';

export const _AI_TEMPERATURE_MEDIUM_ = 0.666;
export const _AI_TEMPERATURE_LOW_ = 0.111;
export const _BROADCAST_INIT_ = `
@@@@@@@%@@@@%%%%%%%% BROADCAST %%%%% BROADCAST @@@@@@@%@@@@@%%%%%%%%%%%%%%%%@@@@@@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#++++++++++++++++++++++++++++++++++++++++++#@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+:::::::::::::::::::::::::-::::::::::::::::-@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+:-==+===-==+=======+===-=+===-=+==+:=+===:-@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+::::::::::::::::::::::::::::::-:::::-:::::-@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*******************************************@@@@%@@@@
@@@@@@@%@@@@%###############################################################%@@@@@@@@%@@@@
@@@@@@@%@@@@%###############################################################%@@@@@@@@%@@@@
@@@@@@@%@@@@%#++++=+++++++*+*+++=*+**==+*+*+++*=++#=++#++++++++++#=+++*++###%@@@@@@@@%@@@@
@@@@@@@%@@@@%#######**#########################################**###########%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*++++++*++*=++++++*++++++++**+++=*+*+=++++*++++++*+++=+#######%@@@@@@@@%@@@@
@@@@@@@%@@@@%#######**#####**##***####*############**#######################%@@@@@@@@%@@@@
@@@@@@@%@@@@%#++**+++*+++**+***++****++**#++*+*++*+**+++**+++*++#=**+++*+*##%@@@@@@@@%@@@@
@@@@@@@%@@@@%####*####***####**#*##***#*###****#**####**####**#*####*#######%@@@@@@@@%@@@@
@@@@@@@%@@@@%#****++*+++++#+++++*+++*#++*++*+#++*++*++#*+++*++**+*++++*++*##%@@@@@@@@%@@@@
@@@@@@@%@@@@%##*###*#***#*#####*####*#*#**##*#*###**#**#####*##***#**#*#####%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*++***+*+++**++***+****#++*+*++*+**+**++*******+*+******+#####%@@@@@@@@%@@@@
@@@@@@@%@@@@%##**#*******#***##**##+*#*#**###*****#*****###***##****#**#####%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*+*+**++#+++***+++***+**+***+*+**+#*#++*+**+**+**+*+**########%@@@@@@@@%@@@@
@@@@@@@%@@@@%####*#***##******+###*#*#**#*******######**#***#**#****########%@@@@@@@@%@@@@
@@@@@@@%@@@@%#****+***+****+#+*******+****+***+****+#++****+#*+*****########%@@@@@@@@%@@@@
@@@@@@@%@@@@%#**************#*********#**#**********#*******#**#****########%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*****++********+#*****+**+#+**+***+#+*+**#++****+********#####%@@@@@@@@%@@@@
@@@@@@@%@@@@%#****************#****#****#********#*****#***#******+***######%@@@@@@@@%@@@@
@@@@@@@%@@@@%#***#*********+**+#*************#*+***************+****+**#####%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*****************#****************#**********+******+****#####%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*********#*+******+*#****#+*++***+*#*******###################%@@@@@@@@%@@@@
@@@@@@@%@@@@%#*****************++*#****#*********#*******###################%@@@@@@@@%@@@@
@@@@@@@%@@@@%###############################################################%@@@@@@@@%@@@@
@@@@@@@%@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@
@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+:....:%%@@@@
@@@@@@@%@@@@%%%##@###%#%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=.==-:.#%@@@@
@@@@@@@%@@@@@%%%%@@%%%%%@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=.--:..#%@@@@
@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@%+++++*%%@@@@
@@@@@@@%@%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@
@@@@@@@%@%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@
@@@@@@@%@%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%%%%%%%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@%@@@@
@@@@@@@%@#%%%#%%%######%%%%%%%%%%%%%%%%%%%%%%%%@%@@@@@@@@@%%%%@@@%%@@@@@@@@@@@@@@@@@%%@@@@
`;

export const _CONSOLE_LOG_ASCII_ = `
::::::::::::::::::::: CONSOLE LOG ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::;********:::::::::::::;+*??%%%??*+;:::::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;:::::::::;*S@@@@@@@@@@@@@S?;::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::::?#@@@@@@@@@@@@@@@@@@%;::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;:::::::%@@@@@@@@@@@@@@@@@@@@@#;:::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::?@@@@@@@@%*+;;+?#@@@@S?+::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::#@@@@@@@%::::::::%S*;:::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::#@@@@@@@%:::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::%@@@@@@@@S*;::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::;#@@@@@@@@@@S?*;::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;:::::::;S@@@@@@@@@@@@@#S?+::::::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;:::::::::*S@@@@@@@@@@@@@@@#%+:::::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;:::::::::::;?S@@@@@@@@@@@@@@@S+:::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;::::::::::::::;+*%#@@@@@@@@@@@@?::::::::
::::::::::::::::::::::::::::::::::::::::?@@@@@@@@;:::::::::::::::::::;*%#@@@@@@@@@*:::::::
::::::::::::::::::::::::::::::::::::::::*@@@@@@@@;:::::::::::::::::::::::*@@@@@@@@#:::::::
:::::::::::::::::::::::::::::+*:::::::::?@@@@@@@#;:::::::;+%S;::::::::::::?@@@@@@@#;::::::
:::::::::::::::::::::::::;+%#@@S;::::::;#@@@@@@@S:::::;*S@@@@@?;:::::::::;#@@@@@@@#:::::::
:::::::::::::::::::::::;%#@@@@@@@%****%#@@@@@@@@*::::;#@@@@@@@@@S%**++*?S@@@@@@@@@*:::::::
::::::::::::::::::::::::*@@@@@@@@@@@@@@@@@@@@@@%::::::;%@@@@@@@@@@@@@@@@@@@@@@@@@?::::::::
:::::::::::::::::::::::::;%@@@@@@@@@@@@@@@@@@#*:::::::::+%@@@@@@@@@@@@@@@@@@@@@S+:::::::::
:::::::::::::::::::::::::::;*S#@@@@@@@@@@@#%*:::::::::::::;*%S@@@@@@@@@@@@@#S?;:::::::::::
:::::::::::::::::::::::::::::::;+**???**+;::::::::::::::::::::;;+*?????**+;:::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                                                                                                
`;

export const _CONSOLE_LOG_EMBEDDINGS_ = `

::::::::::::: EMBEDDINGS :::::::::::::::::::::::------------------------------------------
::::::::::::::::::::::::::::::::::::::::::::::::------------------------------------------
:::::::::::::::::::::::::::::::::::::::::::-----------------------------------------------
::::::::::::::::::::::::::::::::::::::----------------------------------------------------
::::::::::::::::::::::::::::::::----------------------------------------------------------
::::::::::::::::::::::::::::--------------------------------------------------------------
:::::::::::+======++==+==++-*-+==-+===+-+===+-+-++=++-*--==+-+-=+=++-*-=+-=+=++-----------
:::::::::::+==-===++=++==++-+-+=+-+=+-+-====+-+-++=++-+--+=+-+--+=++-+--+--+=++-----------
:::::::::::-------------------------------------------------------------------------------
:::::------==-=-==-=======-==-+---==-+-==-==-=======-==--==-+--+-==-==========------------
:---------+-+-+--+==++-++-+++=+=-==+-+--+--++-*+-*-+-++==++=+=-*--*-=++=**-*-*------------
-----------=-------=--=--=-==-----=----------==-=--=-==--==----=--=--=-====--=------------
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
---------------------+*#%%#*+------------+*#%%##+------------+*#%%%#+=------------------==
-------------------*@@@@%#@@@@*--------*@@@#**#@@@*--------*@@@@#*#%@@*-----------========
------------------*@@@@*=-@@@@@*------*@@@**@@=#@@@#------*@@@@+*@%=%@@#-----=============
------------------@@@@@@%-@@@@@@------@@@@@@@*=@@@@@------@@@@@%@#+=@@@@==================
------------------%@@@@@%-@@@@@%------%@@@@+*%@@@@@%------#@@@**@@@+#@@%==================
------------------=%@@@@@+@@@@%=------=%@@#+***%@@%=------=%@@@#***#@@@===================
--------------------+%@@@@@@%+----------+#@@@@@@%*=----=====+#@@@@@@%*====================
-----------------------====----------------=====--==============++========================
--------------------------------------------==============================================
----------------------=+**+=-----------====+**++==============++***+======================
-------------------=#@@@@@@@@#=--=======#@@%%%%@@#==========#@@@@@@@@#+===================
------------------+@@@@*+#@@@@@+======+@@@%=###%@@@+======+@@@@**##+%@@+==================
------------------%@@@+*@*#@@@@@======%@@@%+***%@@@@======%@@@*+###%@@@@==================
----------------==@@@#+**=+#@@@@======@@@@#%@@%=@@@@======%@@@*+@@@+%@@@==================
-----------=======*@@@@@@+%@@@@*======+@@@#+**+#@@@*======+@@@@+*#*+@@@*==================
------=============+%@@@@@@@@%+========+%@@@@@@@@%+========+%@@@@@@@@%+===================
======================**##**==============**###*==============*####*+=====================
==========================================================================================
==========================================================================================
====================+#%@@@@%#+==========+#%@@@@%#+==========+#%@@@@%#+====================
===================#@@#***+%@@%========#@@@#***@@@%+=======#@@@****#@@%+==============++++
==================%@@@@@@@+%@@@%======#@@@@+*#=@@@@%======#@@@#*@@@+#@@%=========+++++++++
==================@@@@@@%++#@@@@======@@@@+#%@%+%@@@======@@@@%**#*+*@@@===+++++++++++++++
==================#@@@@@@+%@@@@#======#@@@+#%%%+%@@%======#@@@#*%%#+@@@%++++++++++++++++++
===================#@@@@@%@@@@#========#@@@%%%%@@@#+=======#@@@@%%%@@@%+++++++++++++++++++
====================+#%@@@@%#+==========+#%@@@@%#+=========++#%@@@@%#+++++++++++++++++++++
======================================================++++++++++++++++++++++++++++++++++++
================================================++++++++++++++++++++++++++++++++++++++++++
===========================================+++++++++++++++++++++++++++++++++++++++++++++++
=====================================+++++++++++++++++++++++++++++++++++++++++++++++++++++
================================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
==========================++=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

`;

export const _CONSOLE_LOG_LIKE_ = `                     
                                                                                                                                                                
.:-=++**++==-:                        .:-=+++**++=-:.                  
-+#################+-.               :=*##############%#*=:               
:+#%%%#%#####**++**####%%#+:        .-+#%#####**++**####%%%%%%#=.            
:*%%%%%%%%%#######****####%%%%#*=--=+*%%%#####*****####%%%%%%%%%%%%+.          
.+%%%%%%%%%##################%%%%####################%%%%%%%%%%%%%%%%%%-         
.*%%%%%%%%#####*****################################%%%%%%%%%%%%%%%%%%%%%+        
.##%%%%%%#####***+++++**#############*+*###########%%%%%%%%%%%%%%%%%%%%%%%%+       
*##%##########**+++==+++**####%%#####***##########%%%%%%%%%%%%%#####%%%%%%%%=      
=#############***+++====++**#####%################%%%%%%%%%%%###########%%%%%%:     
###############**+++======++**###################%%%%%%%%%%##############%%%%%+     
-####*****######***+++======++***###############%%%%%%%%%%%######*******###%%%%%.    
=####*******#####***+++=====+++****############%%%%%%%%%%######****+++***##%%%%%:    
+####*+++***#######***++++++++++****#########%%%%%%%%%%%######***++++++**##%%%%%-    
=####**+++***########****+++++++****#######%%%%%%%%%%%%#####****+++++++*###%%%%%-    
:####***++****#########*************######%%%%%%%%%%%######****+++++++**##%%%%%%.    
.#####********#############*******#######%%%%%%%%%%%#######***+++++***###%%%%%%#     
=%#####******##########################%%%%%%%%%%%%######**********####%%%%%%%-     
*%%#################################%%%%%%%%%%%%%%######*******####%%%%%%%%%*      
.#%%%%%#############%%%%%%########%%%%%%%%%%%%%%%%##############%%%%%%%%%%%#.      
:#%%%%%%%%########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##########%%%%%%%%%%%%%#.       
.#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####%%%%%%%%%%%%%%%%%#.        
+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+          
-#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:           
.+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=             
:*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+.              
 -#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*.                
  .=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%%%%%%%%%%%*:                  
    .=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@%%%%%%%%*:                    
      .=%%%%%%%%%%%%%@%%%%%%%%%%%%@@@@@@@@@@%%%%%%#-                      
        .=%%%%%%%%%%@%%%%%%%%%@@@@@@@@@@@@@@%%%%#-                        
          .=%%%%%%%%@%%%%%%@@@@@@@@@@@@@@@@@%%*:                          
            .=#%%%%%@@@@@@@@@@@@@@@@@@@@@@@%*:                            
               -*%%%%@@@@@@@@@@@@@@@@@@@@%+.                              
                 :+%%@@@@@@@@@@@@@@@@@@#=.                                
                   .=#%@@@@@@@@@@@@@%+:                                   
                      .=*%@@@@@@@#+-                                      
                          .:--::                                          
                                                                          
                                                                          
                                                                       
                                                   
`;

export const _CONSOLE_LOG_COMMENT_ = `

.................... COMMENT .. COMMENT ..................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
...........,,::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::,,...........
........,:;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;++;,........
.......;;,...............,.....................................................,+?;.......
......+;......,*%%%%,.;?%%%?;.,?%%:..?SS;.*SS+..+SS*.;S%%%;,%%%;.:%?.?%%%%%;.....:S*......
.....:*......,%@*,::.;##;,;##;.S##%.;#S@+.?#S#,,#S#?.+@S**,,S#S#;:#%.,:S@+:,......;#:.....
.....++......,##:....+@S..,S@+.SS+#+S??@+.?#+#??S+@?.+#S**,,SS:%#*#%...%#;........:#+.....
.....:%,......+#S???,,?#%?%#?,,S#,%##:?@+.?@;*##+;@?.+@S??;,SS,,%##%...S@;........?#:.....
......*%:......,;;;:...:;;;:...::.,;:.:;,.:;,,;:.,;:.,;;;;,.::..,;;:...:;,......,*#+......
.......;%?;,.................................................................,:*SS;.......
........,;?%%???????????????????????????????????????????????????????????????%%%?;,........
............,::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::,............
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................

`;

export const _CONSOLE_LOG_RETWEET_ = `

................. RETWEET ......... RETWEET ..............................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
.............................::...:;;;;;;;;;;;;;;;;;;;;;:,................................
...........................,+?*+,..:*????????????????????*+,..............................
.........................,+*?**?*;,..;*******************??*,.............................
.......................,;*??****??*;,.,,,,,,,,,,,,,,,,,*?**?:.............................
.......................,:::+?**?+:::,..................*?**?:.............................
...........................+?**?;.....................,*?**?:.............................
...........................+?**?;.....................,*?**?:.............................
...........................+?**?;.....................,*?**?:.............................
...........................+?**?;......................*?**?:.............................
...........................+?**?;..................:;:;*?**?;:;:,.........................
...........................+?**?+,,,,,,,,,,,,,,,,..,;???****??*:..........................
...........................:*?*******************+:..,+??*??*:............................
............................:+*????????????????????+:..:+?*;,.............................
..............................,:;;;;;;;;;;;;;;;;;;;;;,...:,...............................
..........................................................................................
..............................:::,.....,,................,,...............................
.............................,#**#:+**,*S;+;;*:*:**+,+**,?S:..............................
.............................,@*S%:@?S++#:;#SS#+?#?%;@?S;*S,..............................
.............................,+,,+,:+;,,+:.+:,+.,;+:.;+;.,+:..............................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................
..........................................................................................

`;

export const _CONSOLE_LOG_TWEET_ = `

+++++++++++++++++ EXECUTE TWEET OR QUOTE TWEET +++++++++++++++++++++++;;;;++++++++++++++++
*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++;;;;+++++++++++++++++
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;++++;;++++;;;+++++++++++++++++++++++++++++++++++;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;?####**####?;*#SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS%*;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;?@@@@**@@@@?;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+*%#S+:;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;*S#@@*+%#@@?;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::+##+::::::::::::::::;
+;;;;;;;;;;;;;;;;;*@@%;;+#@S;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::*@%:::::::::::::::::
+;;;;;;;;;;;;;;;;;*%%;;;*%%;;;++;;;;++;;;+;++;+;;+;;++++;;;;;;;:::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;+*+;;;;;;;;;;?%*%??%*;;%?*S+?????%?%+%?;;;;;:::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;+%+S%?S*;;*?+S+%+;%%%?%;?*:;;;::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;+*+*+*?*;;??*?+*??*+?*?;*+::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;+*++*;:+*+**+****+++++;**;::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;%*%??;;%**%?;S++%+%?S%*%*+::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;%*%??;;%?%%*;%;+%+%??#*%%*::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;+*+++;;**+**;*;;*;++;*;**+::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;+%;?+?*?;??+%?+:::::::::::::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;?S*S?%?%+S%*??*:;;;:::::::::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;%?%%*%??*%%?%%+:::::::::::::::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;+;+*++;**;+***++++;;;;;;;+;:::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;S?SS?;*S%?#%*S%*SS?S?S%%S%%;::::::::::::+@%:::::::::::::::::
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;S??S?;?#%?#%;S?:%%+#%##%#%S;:;;:::::::::*@%::::::::::::::::;
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;%?%%?;*SS?%?+%*:??+%??%?%%S;;;;;;;;:::::*@%::::::::::::::::;
+;;;;;;;;;;;;;;;;?@?;;;;;;;;;;*?**??+?++?*+??****?*;;;;;;;;;;;;;;;;:::*@%::::::::::;;;;;;;
+;;;;;++;;;;;;;;;?@%;;;;;;;;;;SS%*#?%@%%##*%S*#??SS?;;;;;;;;;;;;;;;;::*@%::::::;;;;;;;;;;;
+;;;;++++;;;;;;;;?@%;;;;;;;;;;?SS+#*SS#%S#*?S+#??SS?;;;;;;;;;;::::::::+%*:;;;;;;;;;;;;;;;;
+;+;++++++++;+;;;?@?;;;;;;;;;;*??;?+?+?**?+**;??*??+;;;;;;;;;;****+;***++:;;;;;;;;;;;;;;;;
+;;;;;+++;;+;;;;;?@%;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;*@@@@?+@@@@%:;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;*@#+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:*@@@@?+@@@@%:;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;*##*;;;;;;;;;;;;;;;;;::::::::;:::::::::::::+?##@*;*S@@?::;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;+%##S%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*::+@@?::;#@%;:::;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;+**????????????**?????????????????**?+::+**;::;**;::::;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::::;:::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::::::::::::::::;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;++++++++++++++++++++;;;;;;;;;;;;;;;;;:;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+++++++++++++++++++++++;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::::::::::::::::;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::::::;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
+;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

`;
