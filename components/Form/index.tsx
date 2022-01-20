import * as Styled from "../Styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
type Props = {
  visible: Boolean;
};
function Form({ visible }: Props) {
  const [name, setName] = useState("");

  return (
    <>
      <Styled.FormContainer visible={visible}>
        <form>
          <FormControl variant="outlined">
            <label>Países</label>
            <Select displayEmpty value="">
              <MenuItem disabled value="">
                <em>Selecione...</em>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <label>Local</label>
            <TextField
              id="outlined-size-small"
              placeholder="Digite o local que deseja conhecer"
              size="small"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <label>Meta</label>
            <TextField
              required
              id="outlined-size-small"
              placeholder="mês/ano"
              size="small"
            />
          </FormControl>

          <Styled.Btn type="submit" variant="contained">
            Adicionar
          </Styled.Btn>
        </form>
      </Styled.FormContainer>
    </>
  );
}

export default Form;
