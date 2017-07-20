# JavaScript-Promise

最近用到Promise覺得挺有趣的，所以寫了一些程式來驗證一下  
而Promise在程式中會用到的主要原因如下：

 * 避免Callback Hell
 * 容易除錯 Try Catch 
 * 流程及併發控制  

在此只根據流程及併發控制實作  
可分為三種  
1\.第一步全部執行完，再執行第二步（併發執行）

      |---------------|
      google1         |---------------|
      amazon1         google2
      facebook1       amazon2 
                      facebook2  
    

2\.每步必須嚴格按照google, amazon, facebook的順序執行（順序執行）

      |---------|
      google1   |---------|
                google2   |---------|
                          amazon1   |---------|
                                    amazon2   |---------|
                                              facebook1 |--------|
                                                         facebook2  
    

3\.google1執行完後執行google1，amazon1執行完後執行amazon2，facebook1執行完後執行faceboo2  
但對google, amazon, facebook的順序没有要求 (混合執行)

      |------------------|
      google1            |-------------|
                         google2
      |---------|
      amazon1   |-----------|
                amazon2
      |------------|
      facebook1    |-------------|  
                   facebook2  
    

本範例只是小弟的淺見如有任何建議歡迎提出  
PS:有支援Promise瀏覽器中都可執行喔  :+1:
