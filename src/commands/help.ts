/**
 *  Copyright (C) 2024 Louka Ménard Blondin
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { BotCommand } from "."
import embed from "../embed"

export default {
  name: "help",
  description: "Retrieves information about Kaab'ot's commands.",
  async command(interaction) {
    await interaction.editReply(
      embed({
        title: "Commands",
        contents:
          "A list of core commands can be accessed [here](https://kaabot.org). For a full list, either type in `/` or consult the [repository](https://github.com/mblouka/kaabot?tab=readme-ov-file#features).",
      })
    )
  },
} as BotCommand
