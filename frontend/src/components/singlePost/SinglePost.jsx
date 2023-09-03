import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVEhUZGBgaGhwYGhwYGhoaGBkYGBgaGhoaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQhGiE0NDQ0MTQ0NDQ0MTE0NDQ0NDQ0NDQ0NDQ0NDQ/NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzQ/NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EADoQAAEDAgQDBQcDAwQDAQAAAAEAAhEDIQQSMUEFUWETInGBkQYyobHB0fBCUuFicvEUFSOCQ5LCFv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQEAAgICAwAAAAAAAAAAAAERAjESIUFRAxNh/9oADAMBAAIRAxEAPwD46AmAQAmAXo48WLQAmb8UAJ4XSRi1ACkBTCmFrGdRCCpUJgB4KE0IhMNKoITFEKKUj88dFCaEFAqFMI3/AD6oIUjwQFEIJH56qALoKIUUpUFMEQoqB4a/xogfn4FCkFFRCCpQiD8P56J2nXS4i4n/AAbapZ5ohUACghMiExNJCITwo06rNi6WDBMed9enVVkKwhRHNYsalVQhMhZxdWAJwENCcBd5HK0sJ0QpWpEtCIQhaQKCFMKdvz5IIAUQphEKCCOahOTe/nzKVRUJUygqKIUKYU7fn5ughBClQUEFRCYocgQoUoUVDQgfymKIQKAgBMUBUA62QEQhEBaiEwQ1t4GqBYUJwgBTDSECOvL+UhCsISkKWLKrhCaELGNasarAkCskkrtHOmAH+FEKWlTC0wSEJ1BCppYQApQAoqIUEJ55JUEKCFKFlUKIUwhFEICmFJaVDSQpI3TADdRCqaUhQU6AVF0hTMaXd1oJ3gXNtSPL5IUseWmWkg3uDBvY/BF1XCEzRt+fFQgkiNR6/NRClCCIUoUgc0EBSpQiAKE02hCqFhKQrMq14XBZ/eeGA7kE/ALN9LK56F1P9t/qB8AhTYuuc1MAmNJwAJFjadpULfGys3QEzfRCAFtlMolACkc0ClqgplBCJpUFMgNUUqiE5UQoaQhSUxCIRdJClMGqQETSkKITwgNTDS5UsK3KlhTDSQpcE0KC1MXSuH4FCmEKLqEAKQEQi6CELvcO9nC9pc+oGQQMoGZxmN5AHgmrcDYwtbnc55MRZvenleGnnJTyhlcEH8ICWF6Z3AGXb32ub1BDpPh8ZSjh9NhAyTs7OSY6gA/dTyhjzgC1UMK52jTHPZdmv2QaMrGggahrZ87X8Qsv+oMxKeTNhWYUN1ufVQSZ5BWv1Wd7uRXO7fda66bBiug/PNCwZXfgH3ULPtrWzgtUPcREyM2oMRZ3ht6roVAwOylmZn6mEWM6nML5ht5LxhYd7H5i953WyhSe4hocb2l2nmuUuOzdj+Hhh7jsw2affHQjc+CwLQMMWuyOdmOxGnjc/FXUMKXvyRJEyWe84a6Eahd+H5r8uXL8X0xAIW7HYB1OHXLSAZMWJGjo+GixwvRx5TlNjjyllyoUqylQc4hrGlx5NBJPgBddIezeK2oP+E3uLTy2S2RJLenIyqMq1OwdQHKWPB0gtdPpC2YbgOIf7lJ3g6GX6ZyOnqEthNclC04rCPpktqMcwgwcwi467qoNQVwgNWvCYJ9RwZTaXONraa7nQDqV1B7Nva4tqPY3LMwc1xcgbE/LdS2TtZLenByqYXp8TwCiMmSq8kxmBA1OzdD6hd/g/BmNbmyBrWk6ta58Ee8X8+mllm85FnC14JnD6hEim8jnkdEc5hdBvs3X7ocwNzXEuGgg3iY1H5ZfRsVgWEh7NA3KQZi5AAI2Bkz0C5PHZaW9WC+5iJE+LQf8rP7Ppv8AXPl413Bcrsr3gkahgNjMRmP2XQp8BpZA5+cZjAfItGtiI+tlbVZN9PqUrCXECegk2vZZvLlUkkc5/s1XGZzA17Wz3g9otzLXEEHeCsj+DVm2dTi0iS3QmxaZuva8Ia9heCfelt4IkbmfwhdDH4NrmjvZQDEAaE7A7adQtedXxj5y3glcuDTTIJIF4i/Ln5LXh/Zsua5zqzGFrspESD1a6bhdB9V7HGXHN7s8hO3IeCTENDWsGstk+Mn6Ql5VJI4w4e0EjMXbaR56rXhaTQQS0W23O9zqVJ18U5jRZvLSRsp4pzc3Z2kbmYPp4ws+GNy52oBPWfFVh/xSZkVsOMdlykA2sTcgX/IWN7zuoe9ZzWsiais5VtaecSofUTNqR5q+8xP6Z74ECVVWmNPAjX+EvajxSPrKWEp3VVCozBQrg6DcIHMBJBa4ZmgG4Itc6peE4xuHeWvh7HxmtBBG9+uy5FCvAu4zoN7JHvzGSb9V5XpeircSbme6nfMDt10ylZcBintqNc19wdtef4FxmVXNMtP5yXQwbw/vEw68gco1VHq8FiqdVj+2fmJkNJBcB47C084VuCq4Q5RVoMdA95k3AsM4BAB0nmvKiqe92YytsDm1J5+P3UsY7M1wuZmCfeiLLU5WdJZL2+p8ExGHOYYVrGEAZ7Brhm5jcbTdd6kAIE3M6f02JO+vzXzvJ2UOJIfl2kRMGSRYhXYb2rewhlSHPd7r3w1rZgkOjXQfkrW72mfT2GLx+QtDRIBl0DYcz8T0WTEV8js7zAkZo5EFzbGwaNep8FxMZxvsajRWZ3HNzEnvl52IvBaOQtvC6NCuMRRLAWl7TlFidJLc7SNtCiLKtVjiHDvMc0vIjMHxfNB110OhlJxnBYcXGGY57gA3uiBGpMbCwj6BebbjqjXmixsT3IJi+h72wJvHNbOKY55Y0VBEWM63AInmCB8DyVl9penR4ZiGYdjnuaxod7gbcvIkEjpPgFxMRxJzrAAAkkwBcn5Cwt0XJqV8x1/hUPxInLOnzVvpjdeh4PiMrs+Uvd3tdNrn1jzXXwHEhncIDWuj3SO7F4Ij8led4bhzkD2vuXFrmkxMwZAmBH1UtxgHecwEF0HKeYuRHmsbbXTqPfU8Ww+4JaRO/P5LyHG601XAHut7rRMgNXWx1HLTDKbwGx3Ny5riSWzrFwuKzg73XBaD1n7LpxjPK/TnkqqriAwtsbm0DlfXZdClw9weBVBY2bnY+B0MrHxJzJPZyW9dPJXGXWZxOmSHMfllsFp/cBAM/Xot2F4g15JzaDTnyXLdTwr6THFwY/IAQH6Efc3usgGHY4ODs5AgRJ9RzUytaOKv/wCV5Gk28P8AMrn1HEj5Kcbig92YCPqsb3rfixqA8yZRn3VTykdUuliRcKwMqTVhZyQLmyyVcc3a5+CzfXbUm9N9SpZZXPWH/WuJvEckVKhdF76lZnKfC3hVwq/O38qzNF3arEHcyipiCdAnnJ2eH0tqYrkqKlYmBJVRKhc7ytdJxkNnPNCVCztaATB10qAoNDWzN4tN/iodI+sLXgaWbkY1BmI5z9FrrYIBpAseoIcPPcHcIMFPEy2HG+x5+PxW7CYkQ7PaLgjpoPOdlyHUyDBF1bQdeCAdoInXkRug7uC4g90Go8loGVu8xoPD7p2d8dicrQ5+ZrnWcH5YAB5HTzXSwvDHNoCoG33voYkT5fVch78xknvNuI1Efq+dlrPQ6eGe9pDKneDDAY6DECL7xYLucG4g5jjUcJl0wD3gNDqNFyOLw/K8A5y0BxuA46SNAq6GKc1haww11omw5nnOvqrL8JY6lbGltZxOVwdUa7Ne4m4iZGug5LH7TcQY5rGU3iQZi5I97uuJF4kep5LKaeZojxnqOa3cO4OK+WWmGGCQLjN13O638s48+ypAJOsE+YCwZSXSXATfWBbaV63Hez7KbiXPJHp9Vg7amHQxgBFg4gGLbT81eU1nj6UcFDqVVtSqDkbJixDgWkd076jxXRwnE6YHZvaGZjmGcAWJgACbea4WIxziSfLXfxWTEva6HuMusDPTSOiz012+mYajAn6ytzHhfKuH4upTIeHvDddTBix7u4+y+kYLEZqbXkglzZBGmXaOS1x5al446FRocL3XHfgWEnM0HpGn59FbhMQQ4iIbe51J5NH1Vr3GQdOa0jl1sBT3ZHmQuXjMLSaJDnT6hegxlMOabnp/C8bxAkGLkX3lalZsVPeq3vBssZxQFt+m6V9dupvP0/yp5RPGtmZZMRiQNPe8NlmfinEdFklY5fk9em+PD7XVq5dr6KmUwaTdQ5pBgrjbb26SYgjkphKCmIUUZUpTHrKVAITCPNBPRAqEShBaKRjNBy6TG60UeyNnB3Ug/IRor6VE5YEiNTlOp5uA7o899LFXMwzXWc1xcf1TN/7dFcF9DC0nQKb3yDIzNBbIvciF0cbwjEVRLX0nRbuktd4HUT11WMYWpTsBnGpAifNs22VtPiVxs4eAt4Wg/Ja9fKOLj+G4hl6tN4AGsS0D+5tgsDTBkbL6Hw3i7g5uYl7Dzu7UZtN76c7WkR1sfwLDVm5zTa7MJDmdxxneRAJ8U8d6NfP/AP8ATYjL2eYBvLKJPKSfy6w0cc4OzOE3vsY3AOy9Ti/Ylv8A4qrh0e0E/wDsI+S5GI9lMS3RrXdWuH/1Cl402OthvbCkC1r6B7Ifpa4EgnWAfuFrwuOwL6gcKvZsOrajSDPIkS3zleQr8HrM96m4eh+RUUeE1ne7Td8tfFNo+lYh2GojMHsg/wBQOvRcSv7SlmZuHqNawmYa0Anx32Xkq/CcQPepPMQCQ0n5LA5hBgggjaL+ivlfpMju8R4m98y/MfIQOgWN2JloGbxHekkrB2Lh+l3oUpf0hLytJxjRVrRaBHx8z9FV25iDoqSpWdq41U8W8CMwjkRMxJ5TuV6DB+1hZRFJzAS27SLA30IXlFtwtWi1wL2OIA0zC7tpsLSkthZr01Hj1We+yY/Z3rRNsvrJXawvG3OaHGjUa0/qdlAPxkLzODx9dzgaeHGX+xx7u/eC2ccdVeAGhtNg/RNzaLgEzfwXTjalkdmtxjD3FRwEfXlC4mMrUao/43kkH9pm9+UxZeYxVEtdcz5RZFJziYbmm2nSI+SeV3o8ZjVxPCOZBymDvsVzXHZbsaXwJLja8/W6xMEkLPLsnRZUK/s4mdvEKorNjRUJspOyY0zE/ZQVoQhA1lII5E+aRCBp5WSoTAAoFQiEIPUMwZP6zrMQANZWhlB7fdcDPM7+YK4FLHuHL0+y20OMRq0HzK6Yzr0GDwZNz7w57+Bbr6rpUeF0n2qsBOx0PkRdeew/Hmbh3wK7uG47h3th78p/qB+YVw0lb2aIns3yHatfF/8AsBe06q7Cf6ik3KWExy7wkwNjbQzoN4XSw+Mpu9x7HeDh8lpzq4jG3FVZAcxtwTPLlaVobe4tz5T5qzODqEZRMi3hv4hUc+pUObK9gLb3IMa2voobVZFmxtFp6LqMcB0Wd+FYTmIvzk7J7GVmJaDElvpaTr8QfAqluKD6zGuax9MtJcTOcGNhl2INjE+S1v4fTPPWbHlP3KBw6nMwbf1HYyp7PRGUmBxyhggnKdJ09DJVlWm14/5GMdOzmtd6pxhWD9PqT8vOFYKbP2j0+qqOVV4ThzJ7Fni0RrMzB6n1VLvZ7Dm76QzHq7w5ruCmy3dFtIspdlNiAR1umRXn/wDYqQHdptB2lvLxnl8FzanAn/oZTBnWZtOkQF7AsZrlHLymfmVnrYemby5tiLGxBABmZ5Jn8HmBg8TZpNuhAjlaVFThtT9wHl/C9CWMH63WM6j000Weo5n73ctRz8NU2s48/W4K8+9D/wDtGvmEn+1uaO6xzfB8/Uruvy/uNvD42/JWWqWoPP1cC8y1wffW5vHisNPhb50PXunXovQ1nePqVldUPM+pS8ZVlxzhw94mQdeWohVnCPn3DHh0/wAra+of3H1VL39T6p4nkz1KT7jKLiNAPpZZ61Jx0bA8ltJ6lUuU8IeVYH0iNVAZ1W14BWfseqxeONTkqgKDCsNIc0pZ1UyrsISoUlqiFPahCEILmuVjYWYFO1y3KzY1NYnDFmZUV7ay1KzYsaSFsw/E6rPde4eZj0WNtUJs4VR3sN7TVB74DvgfULtYP2gpPsXZDydp66LxNlOVDX0gVQbhTnXz/DYt7PceQOWo9Curh/aE6VGebfsUXXqu0R2i4lPjTDurBxVnNB1jVVZxK5p4iw/qVb8Y3Z49Cg6L8UqX4s81zH4r+oeiofijs4eiI6T8aRustbHHmsL8U7os7sQeS0NT8aeapOPWN71USiOgcZ1VT8UeaxEqMyC9+IPNUuqFKXJSUEl6XMoJSypokuSlQSlJTRJSFKSoKzrWAlKSgpFnVkBSlBULNrQQhCihSFCElDgp2lVApgtys2LQ5O1ypBTgqpYuDkweqAUwctajSHpxUWYOUhyI0h6YP6rMHpg5Eae0KO2KzhybOtC/tkdr1WdCDR2nVR2iplEoLS9QXKuUSgcuUEhJKglZDmEsJcwS5kDFqUsUF6g1EUFqQtQXlKXqKghKVJclLlFkQSkKYuSlyzWkFQiULNUIQhQCEIQCkFCFqIYJgUIWoGBUgoQqykFMHIQqiQ5NmQhVEhybMoQgnMjMhCCcyMyEIgzKMyEIozKJQhBEpZQhBBKUlCFFKVBKEKLCkpSUIUaKVCELNAhCFlQhCEH/2Q==" 
            alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit!
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Vaishnavi</b></span>
                <span className="singlePostDate">1 Hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque id nihil, molestias quae reiciendis voluptas, temporibus vitae dolores aliquam exercitationem quia ratione culpa! Harum adipisci voluptate explicabo molestias sapiente qui?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam in ea praesentium tempore reiciendis vitae, qui magni sed ratione totam dolor quidem eum vel voluptate magnam? Ipsam officia numquam ratione?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab consequuntur quo nihil, ipsa officiis magni molestias soluta laudantium quaerat nobis totam culpa voluptate esse ad! Nam ad commodi explicabo cumque.
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
            </p>
        </div>
    </div>
  )
}