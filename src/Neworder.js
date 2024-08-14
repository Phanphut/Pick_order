import React from "react";
import './App.css';

function Neworder() {
    return(
        <form action="/" method="get">
            <div className="NoodlePart">
                <label>เส้น :</label><br></br>
                <input type='radio' id='n1' name='noodle' value='เส้นหมี่'></input>
                <label for='n1'>เส้นหมี่</label><br></br>
                <input type='radio' id='n2' name='noodle' value='เส้นเล็ก'></input>
                <label for='n2'>เส้นเล็ก</label><br></br>
                <input type='radio' id='n3' name='noodle' value='เส้นใหญ่'></input>
                <label for='n3'>เส้นใหญ่</label><br></br>
                <input type='radio' id='n4' name='noodle' value='บะหมี่'></input>
                <label for='n4'>บะหมี่</label><br></br>
                <input type='radio' id='n5' name='noodle' value='บะหมี่เป๊าะ'></input>
                <label for='n5'>บะหมี่เป๊าะ</label><br></br>
                <input type='radio' id='n6' name='noodle' value='เกาเหลา'></input>
                <label for='n5'>เกาเหลา</label><br></br>
            </div>
            <div className="Soup">
                <label>ซุป :</label><br></br>
                <input type='radio' id='s1' name='soup' value='น้ำ'></input>
                <label for='s1'>น้ำ</label><br></br>
                <input type='radio' id='s2' name='soup' value='แห้ง'></input>
                <label for='s2'>แห้ง</label><br></br>
                <input type='radio' id='s3' name='soup' value='โฟ'></input>
                <label for='s3'>โฟ</label><br></br>
                <input type='radio' id='s4' name='soup' value='โฟแห้ง'></input>
                <label for='s4'>โฟแห้ง</label><br></br>
                <input type='radio' id='s5' name='soup' value='ยำ'></input>
                <label for='s5'>ยำ</label><br></br>
                <input type='radio' id='s6' name='soup' value='แห้งยำ'></input>
                <label for='s6'>แห้งยำ</label><br></br>
                <input type='radio' id='s7' name='soup' value='โฟยำ'></input>
                <label for='s7'>โฟยำ</label><br></br>
                <input type='radio' id='s8' name='soup' value='โฟยำแห้ง'></input>
                <label for='s8'>โฟยำแห้ง</label><br></br>
            </div>
            <div className="Type">
                <label>-------------------------</label><br></br>
                <input type='radio' id='t1' name='type' value='ธรรมดา'></input>
                <label for='t1'>ธรรมดา</label><br></br>
                <input type='radio' id='t2' name='type' value='พิเศษ'></input>
                <label for='t2'>พิเศษ</label><br></br>
                <label>เพิ่มเติม :</label>
                <input type='text'></input>
            </div>
            <input type="submit" value="AddToOrder"></input>
        </form>

    )
}

export default Neworder;